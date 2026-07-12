const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const MIGRATIONS_DIR = path.join(__dirname, '..', 'VVV-8', 'migrations')
const MIGRATION_TABLE = 'public.vvv_migrations'

function getMigrations() {
  return fs.readdirSync(MIGRATIONS_DIR)
    .filter((name) => name.endsWith('.sql'))
    .sort()
}

function execSql(sql) {
  execSync(sql, { stdio: 'inherit' })
}

function ensureMigrationTable() {
  execSql(`psql "$DATABASE_URL" -c "CREATE TABLE IF NOT EXISTS ${MIGRATION_TABLE} (id text PRIMARY KEY, applied_at timestamptz DEFAULT now());"`)
}

function getAppliedMigrations() {
  const output = execSync(`psql "$DATABASE_URL" -t -A -c "SELECT id FROM ${MIGRATION_TABLE} ORDER BY id;"`, { encoding: 'utf8' })
  return output
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
}

function applyMigration(id, filePath) {
  console.log('Applying migration', id)
  execSql(`psql "$DATABASE_URL" -f "${filePath}"`)
  execSql(`psql "$DATABASE_URL" -c "INSERT INTO ${MIGRATION_TABLE} (id) VALUES ('${id}') ON CONFLICT DO NOTHING;"`)
}

function run() {
  if (!process.env.DATABASE_URL) {
    console.error('DATABASE_URL is required')
    process.exit(1)
  }

  ensureMigrationTable()
  const applied = new Set(getAppliedMigrations())
  const migrations = getMigrations()

  migrations.forEach((file) => {
    if (!applied.has(file)) {
      applyMigration(file, path.join(MIGRATIONS_DIR, file))
    }
  })
}

run()

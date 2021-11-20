const Database = require('./config')

const initDb = {
    async init() {
        const db = await Database()
        
        await db.exec(`CREATE TABLE profile (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            avatar TEXT,
            monthly_budget INT,
            days_per_week INT,
            hours_per_day INT,
            vacation_per_year INT,
            value_hour INT
        );`)
        
        await db.exec(`CREATE TABLE jobs (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            daily_hours INT,
            total_hours INT,
            created_at DATETIME
        );`)
        
        await db.run(`INSERT INTO profile (
            name,
            avatar,
            monthly_budget,
            days_per_week,
            hours_per_day,
            vacation_per_year,
            value_hour
        ) VALUES (
            "Santiago",
            "https://media-exp1.licdn.com/dms/image/C4E03AQHN7RArWOg33w/profile-displayphoto-shrink_800_800/0/1621728045105?e=1641427200&v=beta&t=hVhXOD9iIfn-vyzxC3E5j2Kn-Q5T4W8bGXaNF1SMZEs",
            3000,
            5,
            5,
            4,
            75
        );`)
        
        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
        ) VALUES (
            "Pizzaria Guloso",
            2,
            1,
            1617514376018
        );`)
        
        await db.run(`INSERT INTO jobs (
            name,
            daily_hours,
            total_hours,
            created_at
        ) VALUES (
            "OneTwo Projects",
            3,
            47,
            1617514376018
        );`)
        
        await db.close()
    }
}

initDb.init()

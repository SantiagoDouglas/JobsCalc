module.exports = {
    remainingDays(job) {
        // ajustes no job (cálculo)
        const remainingDays = (job["total-hours"] / job["daily-hours"]).toFixed()
    
        const createdDate = new Date(job.created_at) // data do projeto criado
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDateInMs = createdDate.setDate(dueDay) // data futura em milisegundos
    
        const timeDiffInMs = dueDateInMs - Date.now()
        //transformar miisegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)
    
        // restam x dias
        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job["total-hours"]
}
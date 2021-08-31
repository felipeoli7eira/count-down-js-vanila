export default class CountDown
{
    constructor(futureDate)
    {
        this.futureDate = futureDate
    }

    get getFutureDate()
    {
        return new Date(this.futureDate)
    }

    get getActualDate()
    {
        return new Date();
    }

    get getDiffWithTimeStamp()
    {
        return this.getFutureDate.getTime() - this.getActualDate.getTime()
    }

    get days()
    {
        return Math.floor( this.getDiffWithTimeStamp / (24 * 60 * 60 * 1000) )
    }

    get hours()
    {
        return Math.floor( this.getDiffWithTimeStamp / (60 * 60 * 1000) )
    }

    get minutes()
    {
        return Math.floor( this.getDiffWithTimeStamp / (60 * 1000) )
    }

    get seconds()
    {
        return Math.floor( this.getDiffWithTimeStamp / 1000 )
    }

    get total()
    {
        let days = this.days
        let hours = this.hours % 24
        let minutes = this.minutes % 60
        let seconds = this.seconds % 60

        if ( this.getActualDate.getTime() < this.getFutureDate.getTime() ) {
            return {
                days,
                hours,
                minutes,
                seconds
            }
        }

        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    format(time)
    {
        if (time.toString().length === 1) {
            return "0" + time
        }

        return time
    }
}

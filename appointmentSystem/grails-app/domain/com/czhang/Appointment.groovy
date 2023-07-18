package com.czhang

//import groovy.time.TimeCategory
import groovy.time.TimeDuration

class Appointment {
    Date appDateTime
    Integer appDuration // duration in mins
    String roomNumber

    static constraints = {
        appDateTime blank: false, min: new Date()
        appDuration blank: false, min: 0, max:480
        roomNumber blank: false
    }
}

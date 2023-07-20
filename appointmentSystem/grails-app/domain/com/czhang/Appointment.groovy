package com.czhang

//import groovy.time.TimeCategory
import groovy.time.TimeDuration

class Appointment {
    Date appDateTime
    Integer appDuration // duration in mins
    String roomNumber
    static belongsTo = [surgery:Surgery, patient: Patient]
    static hasOne = [doctor:Doctor]
    static hasMany =[nurse:Nurse]

    static constraints = {
        appDateTime blank: false
        appDuration blank: false, min: 0, max:480
        roomNumber blank: false
        doctor nullable: true // optional
        nurse minSize: 0 // one appointment requires zero or more nurses
        surgery nullable: false
        patient nullable: false
    }
}

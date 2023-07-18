package com.czhang

class Doctor {
    String doctorName
    String qualifications
    String position
    String doctorEmail
    String password
    String doctorOffice
    String doctorPhone
    String bio   // Biography of doctor

    static hasMany = [prescriptions: Prescription, appointments: Appointment]

    static constraints = {
        doctorName blank: false
        qualification blank: false
        position blank: false
        doctorEmail blank: false, email: true
        password blank: false
//        doctorOffice
        doctorPhone shared: "phoneNumber"
//        bio
    }
}
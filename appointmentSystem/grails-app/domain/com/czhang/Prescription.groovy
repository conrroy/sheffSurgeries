package com.czhang

class Prescription {
    String prescriptionNumber
    String medicine
    String daysSuply
    String totalCost
    String usage // Additional attribute
    Date dateIssued
    Boolean patientPaying // To indicate whether patient will pay for the medicine

    static hasOne = [doctor: Doctor, patient: Patient]

    static constraints = {
        prescriptionNumber blank: false
        dateIssued blank: false
        patientPaying inList: [true, false]
        doctor nullable: false, blank: false
        patient nullable: false, blank: false
    }
}

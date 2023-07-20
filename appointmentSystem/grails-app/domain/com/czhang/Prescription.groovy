package com.czhang

class Prescription {
    String prescriptionNumber
    String medicine
    String daysSuply
    String totalCost
    String medUsage // Additional attribute
    Date dateIssued
    Boolean patientPaying // To indicate whether patient will pay for the medicine

    static hasOne = [doctor: Doctor, patient: Patient]

    static constraints = {
        prescriptionNumber blank: false
        dateIssued blank: false
        medicine nullable: true
        patientPaying inList: [true, false]
        medUsage size: 5..1000, nullable: true
    }

    String toString(){
        return patient.toString() + '\'s ' + 'Prescription'
    }
}

package com.czhang

class Surgery {
    String name
    String postcode
    String telephone
    Integer numberOfPatients // Maximum number of patients that can be registered
    String description
    String openingTime
    Boolean registeringNewPatients // indicate whether the surgery accepts new patient registration

    static hasMany = [doctors: Doctor, nurses: Nurse, receptionists: Receptionist, patients: Patient, appointments: Appointment]

    static constraints = {
        name blank: false
        postcode blank: false
        telephone shared: "phoneNumber"
        numberOfPatients blank: false, min: 0
        description nullable: true
        openingTime blank: false //TODO: matches: regex
        registeringNewPatients inList: [true, false]
    }

    String toString(){
        return name
    }
}

package com.czhang

class Receptionist {
    String recepName
    String recepEmail
    String recepUsername
    String recepPassword
    String recepPhone

    static constraints = {
        recepName blank: false, unique: true
        recepEmail email: true
        recepUsername blank: false
        recepPassword blank: false
//        recepPhone
    }
}

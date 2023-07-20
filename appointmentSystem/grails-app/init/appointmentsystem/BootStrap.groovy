package appointmentsystem

import com.czhang.Appointment
import com.czhang.Nurse
import com.czhang.Patient
import com.czhang.Prescription
import com.czhang.Receptionist
import com.czhang.Surgery
import com.czhang.Doctor

class BootStrap {

    def init = { servletContext ->
        def surgery1 = new Surgery(
                name: 'Surgery1',
                postcode: 'PostCOde1',
                telephone: '00112233',
                numberOfPatients: 600,
                description: '',
                openingTime: '8:00 - 17:00',
                registeringNewPatients: true
        ).save(failOnError: true)

        def surgery2 = new Surgery(
                name: 'Surgery2',
                postcode: 'PostCOde2',
                telephone: '44112233',
                numberOfPatients: 500,
                description: 'take care',
                openingTime: '8:00 - 17:00',
                registeringNewPatients: true
        ).save(failOnError: true)

        def doctor1 = new Doctor(
                doctorName: "Doctor1",
                qualifications: "DrQ1",
                position: "DP1",
                doctorEmail: "doctor1@example.com",
                password: "pd_dc1",
                doctorOffice: "DrO_1",
                doctorPhone: "12332111",
                bio: "",
                surgery: surgery1
        ).save(failOnError: true)

        def doctor2 = new Doctor(
                doctorName: "Doctor2",
                qualifications: "DrQ",
                position: "DP12",
                doctorEmail: "doctor2@example.com",
                password: "pd_dc2",
                doctorOffice: "DrO_2",
                doctorPhone: "12332211",
                bio: "",  // Biography of doctor
                surgery: surgery2

        ).save(failOnError: true)

        def nurse1 = new Nurse(
                nurseName: "Nurse1",
                qualifications: "NuQ",
                nurseEmail: "nurse1@example.com",
                nurseOffice: "Nu0_1",
                nursePhone: "0101011",
                surgery: surgery1
        ).save(failOnError: true)

        def nurse2 = new Nurse(
                nurseName: "Nurse2",
                qualifications: "NuQ2",
                nurseEmail: "nurse2@example.com",
                nurseOffice: "Nu0_2",
                nursePhone: "0101012",
                surgery: surgery2
        ).save(failOnError: true)

        def patient1 = new Patient(
                patientName: "Patient1",
                patientAddress: "Add1,Add2,Add3",
                patientResidence: "v1,t1,c1",
                patientDob: new Date(1970 - 1900, 1, 1),
                patientID: "PID1",
                dateRegistered: new Date(1990 - 1900, 1, 1),
                patientPhone: "71148901",
                patientEmail: "p1@examle.com",
        ).save(failOnError: true)

        def patient2 = new Patient(
                patientName: "Patient2",
                patientAddress: "Add1,Add2,Add3",
                patientResidence: "v1,t1,c1",
                patientDob: new Date(1990 - 1900, 1, 1),
                patientID: "PID2",
                dateRegistered: new Date(1995 - 1900, 1, 1),
                patientPhone: "71148902",
                patientEmail: "p2@examle.com"
        ).save(failOnError: true)

        def receptionist1 = new Receptionist(
                recepName: "RecepName1",
                recepPhone: "22378899",
                recepUsername: "recep1",
                recepPassword: "recep1",
                recepEmail: "recep1@example.com",
                surgery: surgery1
        ).save(failOnError: true)

        def receptionist2 = new Receptionist(
                recepName: "RecepName2",
                recepPhone: "22378810",
                recepUsername: "recep2",
                recepPassword: "recep2",
                recepEmail: "recep2@example.com",

                surgery: surgery2

        ).save(failOnError: true)

        def appointment1 = new Appointment(
                appDuration: 30,
                appDateTime: new Date(),
                roomNumber: "Room1",
                surgery: surgery1,
                patient: patient1,
                doctor: doctor1,
        ).save(failOnError: true)

        def appointment2 = new Appointment(
                appDuration: 30,
                appDateTime: new Date(),
                roomNumber: "Room2",
                surgery: surgery2,
                patient: patient2,
                doctor: doctor2,
                nurse: nurse2
        ).save(failOnError: true)

        def prescription1 = new Prescription(
                prescriptionNumber: "prescrip1",
                medicine: "",
                daysSuply: 5,
                totalCost: 110,
                medUsage: '2 times per day, 10mg per time',
                dateIssued: new Date(),
                patientPaying: false,
                patient: patient1,
                doctor: doctor1

        ).save(failOnError: true)

        def prescription2 = new Prescription(
                prescriptionNumber: "prescrip2",
                medicine: "",
                daysSuply: 5,
                totalCost: 110,
                medUsage: '2 times per day, 10mg per time',
                dateIssued: new Date(),
                patientPaying: false,
                patient: patient2,
                doctor: doctor2
        ).save(failOnError: true)
    }
    def destroy = {
    }
}

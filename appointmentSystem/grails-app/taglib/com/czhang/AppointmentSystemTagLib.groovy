package com.czhang

class AppointmentSystemTagLib {
//    static defaultEncodeAs = [taglib:'html']
    //static encodeAsForTags = [tagName: [taglib:'html'], otherTagName: [taglib:'none']]
    def subSystemPortal={attrs,body->
        out<<" <div class='m-5'>"
        out<<"     <button type='button' class='btn ${attrs.btnColor} btn-block btn-lg'>"
        out<< g.link(attrs.portal, class:'text-light', controller:attrs.controller)
        out<<"     </button>"
        out<<" </div>"
    }

    def receptionistPortal={
        out <<"<section class='row colset-2-its'>"
        out <<"    <div class='row m-auto'>"
        out <<"        <div class='row m-auto'>"
        out <<"            <div class='col'>"
        out << subSystemPortal(portal:'Receptionists Management', btnColor:'btn-primary',controller:'receptionist')
        out << subSystemPortal(portal:'Doctors Management', btnColor:'btn-success',controller:'doctor')
        out <<"            </div>"
        out <<"        </div>"
        out <<"        <div class='row m-auto'>"
        out <<"            <div class='col'>"
        out << subSystemPortal(portal:'Nurses Management', btnColor:'btn-info',controller:'nurse')
        out << subSystemPortal(portal:'Patients Management', btnColor:'btn-danger',controller:'patient')
        out <<"            </div>"
        out <<"        </div>"
        out <<"    </div>"
        out <<"</section>"
    }

    def doctorPortal={
        out <<"<section class='row colset-2-its'>"
        out <<"    <div class='row m-auto'>"
        out <<"        <div class='row m-auto'>"
        out <<"            <div class='col'>"
        out << subSystemPortal(portal:'Appointments', btnColor:'btn-primary',controller:'appointment')
        out << subSystemPortal(portal:'Prescriptions', btnColor:'btn-success', controller:'prescription')
        out <<"            </div>"
        out <<"        </div>"
        out <<"    </div>"
        out <<"</section>"
    }

    def loginToggle={
        out<<"<div style='margin:15px 0 40px;'>"
        if(request.getSession(false) && session.user){
            out<<"<span style='float:left; margin-left:15px'>"
            out<<"Welcome ${session.user}."
            out<<"</span><span style='float:right;margin-right:15px'>"
            out << "<a href='${createLink(controller:'receptionist', action:'logout')}'>"
            out << "Logout </a></span>"

            if(session.user_type == Receptionist.toString()){
                out << receptionistPortal()
            }else if(session.user_type == Doctor.toString()){
                out << doctorPortal()
            }

            out<< " <a> 1 </a>"

        }else{
            // out << "<span style='float:right;margin-right:10px'>"
            // out << "<a href='${createLink(controller:'receptionist', action:'login')}'>"
            // out << "Login </a></span>"
            out<< "<section class='row colset-2-its align-items-center'>"
            out << "<h1> Welcome to Surgery Appointment System </h1>"
            out<<"  <div class='row m-auto'>"
            out<<"    <div class='col m-5'><h2 class='font-weight-bold'>Please choose to login as ..</h2></div>"
            out<<"    <div class='col'>"
            out<<"        <div class='first m-5'>"
            out<<"            <button type='button' class='btn btn-primary btn-block btn-lg'>"
            out<< g.link("Receptionist",class:'text-light',controller:'receptionist',action:'login')
            out<<"            </button>"
            out<<"        </div>"
            out<<"        <div class='second m-5'>"
            out<<"            <button type='button' class='btn btn-success btn-block btn-lg'>"
            // out<<"                <g:link class='text-light' controller='doctor' action='login'>Doctor</g:link>"
            out<< g.link("Doctor",class:'text-light',controller:'doctor',action:'login')
            out<<"            </button>"
            out<<"        </div>"
            out<<"    </div>"
            out<<"</div>"
            out<< "</section>"
        }
        out << "</div><br/>"
    }
}

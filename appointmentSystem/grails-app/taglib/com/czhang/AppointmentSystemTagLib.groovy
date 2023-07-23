package com.czhang

class AppointmentSystemTagLib {
//    static defaultEncodeAs = [taglib:'html']
    //static encodeAsForTags = [tagName: [taglib:'html'], otherTagName: [taglib:'none']]

    def loginToggle={
        out<<"<div style='margin:15px 0 40px;'>"
        if(request.getSession(false) && session.user){
            out<<"<span style='float:left; margin-left:15px'>"
            out<<"Welcome ${session.user}."
            out<<"</span><span style='float:right;margin-right:15px'>"
            out << "<a href='${createLink(controller:'receptionist', action:'logout')}'>"
            out << "Logout </a></span>"


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

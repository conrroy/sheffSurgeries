<!doctype html>
<html>
<head>
    <meta name="layout" content="public"/>
    <title>Awesome Surgery Appointment System</title>
</head>

<body>

<div class="row text-center">
    <div class="col-4">
        <asset:image class="img-fluid" src="appointment/pexels-alex-green-5699456.jpg"/>
    </div>

    <div class="col-4">
        <asset:image class="img-fluid" src="appointment/pexels-karolina-grabowska-4021775.jpg"/>
    </div>

    <div class="col-4">
        <asset:image class="img-fluid" src="appointment/pexels-alex-green-5699456.jpg"/>
    </div>

</div>

<div id="content" role="main">
    <div class="container">
        <section class="row colset-2-its align-items-center">
            <h1>Welcome to Surgery Appointment System</h1>

            <div class="row m-auto">
                <div class="col m-5"><h2 class="font-weight-bold">Please choose to login as ..</h2></div>

                <div class="col">
                    <div class="first m-5">
                        <button type="button" class="btn btn-primary btn-block btn-lg">
                            <g:link class="text-light" controller="receptionist" action="login">Receptionist</g:link>
                        </button>
                    </div>

                    <div class="second m-5">
                        <button type="button" class="btn btn-success btn-block btn-lg">
                            <g:link class="text-light" controller="doctor" action="login">Doctor</g:link>
                        </button>
                    </div>
                </div>

            </div>

%{--            <div id="controllers" role="navigation">--}%
%{--                <h2>Useful Links</h2>--}%
%{--                <ul>--}%
%{--                    <g:each var="c" in="${grailsApplication.controllerClasses.sort { it.fullName }}">--}%
%{--                        <button type="button" class="btn btn-success">--}%
%{--                            <g:link controller="${c.logicalPropertyName}">${c.fullName}</g:link>--}%
%{--                        </button>--}%
%{--                    </g:each>--}%
%{--                </ul>--}%
%{--            </div>--}%
        </section>
    </div>
</div>

</body>
</html>

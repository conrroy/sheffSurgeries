<!doctype html>
<html>
<head>
    <meta name="layout" content="public"/>
    <title>Awesome Surgery Appointment System</title>
</head>

<body>

%{--<div class="container-fluid p-6 bg-primary text-light text-center">--}%
%{--    <div class="row">--}%
%{--        <asset:image class="img-fluid d-inline-block align-top w-5 pr-2" width="30" height="30" src="appointment/nhs-logo.svg"/>--}%
%{--        <h1 class="text-center">Awesome Surgery Appointment System</h1>--}%
%{--    </div>--}%
%{--</div>--}%



%{--<div class="svg" role="presentation">--}%
%{--    <div class="grails-logo-container">--}%
%{--        <asset:image src="grails-cupsonly-logo-white.svg" class="grails-logo"/>--}%
%{--    </div>--}%
%{--</div>--}%

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
        <section class="row colset-2-its">
            <h1>Welcome to Surgery Appointment System</h1>

            <div id="controllers" role="navigation">
                <h2>Useful Links</h2>
                <ul>
                    <g:each var="c" in="${grailsApplication.controllerClasses.sort { it.fullName }}">
%{--                        <li class="controller">--}%
%{--                            <g:link controller="${c.logicalPropertyName}">${c.fullName}</g:link>--}%
%{--                        </li>--}%
                        <button type="button" class="btn btn-success">
                            <g:link controller="${c.logicalPropertyName}">${c.fullName}</g:link>
                        </button>
                    </g:each>
                </ul>
            </div>
        </section>
    </div>
</div>

</body>
</html>

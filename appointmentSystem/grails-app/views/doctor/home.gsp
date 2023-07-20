<!doctype html>
<html>
<head>
    <meta name="layout" content="public"/>
    <title>Awesome Surgery Appointment System | Home Page</title>
</head>

<body>

<div id="content" role="main">
    <div class="container">
        <section class="row colset-2-its">
            <h1>Welcome to Surgery Appointment System</h1>

            %{--            <div id="controllers" role="navigation">--}%
            %{--                <h2>Useful Links</h2>--}%
            %{--                    --}%%{--                    <g:each var="c" in="${grailsApplication.controllerClasses.sort { it.fullName }}">--}%
            %{--                    <li class="controller">--}%
            %{--                        <g:link controller="${c.logicalPropertyName}">${c.fullName}</g:link>--}%
            %{--                    </li>--}%
            %{--                    --}%%{--                    </g:each>--}%

            <div class="row m-auto">
                <div class="row m-auto">
                    <div class="first m-5">
                        <button type="button" class="btn btn-primary btn-block btn-lg">
                            <g:link class="text-light" controller="prescription">Prescription Management</g:link>
                        </button>
                    </div>

                    <div class="second m-5">
                        <button type="button" class="btn btn-danger btn-block btn-lg">
                            <g:link class="text-light" controller="appointment">Appointment Management</g:link>
                        </button>
                    </div>

                </div>
            </div>


            %{--                    </div>--}%
        </section>
    </div>
</div>

</body>
</html>

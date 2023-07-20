<!doctype html>
<html lang="en" class="no-js">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>
    <g:layoutTitle default="Auto Catalog"/>
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>

    <asset:stylesheet src="application.css"/>

    <g:layoutHead/>
</head>
<body>

<div class="navbar navbar-default navbar-static-top bg-primary" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <a class="navbar-brand" href="/#">
                <i class="fa grails-icon">
                    <asset:image src="appointment/nhs-logo.svg"/>
                </i> Awesome Surgery Appointment System
            </a>
        </div>
        <div class="navbar-collapse collapse" aria-expanded="false" style="height: 0.8px;">
            <ul class="nav navbar-nav navbar-right">
                <g:pageProperty name="page.nav" />
            </ul>
        </div>
    </div>
</div>

<g:layoutBody/>

<div class="footer bg-primary" role="contentinfo">
    Wish you healthy and safe!
</div>

</body>
</html>
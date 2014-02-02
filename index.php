<!DOCTYPE html>
<html>
<<<<<<< HEAD
<head>
  <meta charset="utf-8">
  <title>CSCI 3130 Team 12</title>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <link href="css/codiqa.ext.min.css" rel="stylesheet">
  <link href="css/jquery.mobile-1.3.1.min.css" rel="stylesheet">

  <script src="js/jquery-1.9.1.min.js"></script>
  <script src="js/jquery.mobile-1.3.1.min.js"></script>
  <script src="js/codiqa.ext.min.js"></script>
  <script src="js/csci-3130-team-12.js"></script>
</head>
<body>
  <div data-role="page" data-control-title="Welcome" id="welcome">
      <div data-role="content" style="padding: 45px">
          <div style=" text-align:center" data-controltype="image">
              <img style="width: 100px; height: 100px" src="img/100.png">
          </div>
          <div data-controltype="textblock">
              <p style="text-align: center;">
                  Calorie Manager
              </p>
              <p style="text-align: center;">
                  <span style="color: rgb(136, 136, 136);">
                      <span class="GRcorrect" grcontextid="ver:0" grmarkguid="a05ff85a-d2eb-4192-bb9d-f4f4a1fc3d38"
                      gruiphraseguid="b630b72d-c9f4-4d4e-ad22-34b5532215e8">
                          ver
                      </span>
                      . 0.1
                  </span>
              </p>
              <p style="text-align: center;">
                  <br>
              </p>
              <p style="text-align: center;">
                  <br>
              </p>
              <p style="text-align: center;">
                  <br>
              </p>
          </div>
          <div class="ui-grid-a">
              <div class="ui-block-a">
                  <a data-role="button" href="#login">
                      Sign In
                  </a>
              </div>
              <div class="ui-block-b">
                  <a data-role="button" href="#register">
                      Sign up
                  </a>
              </div>
          </div>
      </div>
  </div>
  <div data-role="page" data-control-title="Login" id="login">
      <div data-role="content" style="padding: 45px">
          <div style=" text-align:center" data-controltype="image" id="logo_Img">
              <img style="width: 100px; height: 100px" src="img/100.png">
          </div>
          <div data-controltype="textblock">
              <p style="text-align: center;" data-mce-style="text-align: center;">
                  <b>
                      <span class="GingerNoCheckStart">
                      </span>
                      <br>
                  </b>
              </p>
              <p style="text-align: center;" data-mce-style="text-align: center;">
                  <b>
                      <span class="GingerNoCheckStart">
                          <br>
                      </span>
                  </b>
              </p>
              <p style="text-align: center;" data-mce-style="text-align: center;">
                  <b>
                      <span class="GingerNoCheckStart">
                          <br>
                      </span>
                  </b>
              </p>
              <p style="text-align: center;" data-mce-style="text-align: center;">
                  <br>
              </p>
          </div>
          <div data-role="fieldcontain" data-controltype="textinput">
              <input name="" id="usrname_TI" placeholder="username" value="" type="text"
              data-mini="true">
          </div>
          <div data-role="fieldcontain" data-controltype="textinput">
              <input name="" id="pwd_TI" placeholder="password" value="" type="password"
              data-mini="true">
          </div>
          <a id="login_Btn" data-role="button" data-theme="c" href="#main">
              login
          </a>
      </div>
  </div>
  <div data-role="page" data-control-title="Register" id="register">
      <div data-role="content" style="padding: 45px">
          <div style=" text-align:center" data-controltype="image">
              <img style="width: 100px; height: 100px" src="img/100.png">
          </div>
          <div data-controltype="textblock">
              <p>
                  <br>
              </p>
              <p>
                  <br>
              </p>
              <p>
                  <br>
              </p>
              <span class="GingerNoCheckEnd">
              </span>
          </div>
          <div data-role="fieldcontain" data-controltype="textinput">
              <input name="" id="username_TI" placeholder="username" value="" type="text"
              data-mini="true">
          </div>
          <div data-role="fieldcontain" data-controltype="textinput">
              <input name="" id="pwd_TI" placeholder="password" value="" type="password"
              data-mini="true">
              <div data-role="fieldcontain" data-controltype="textinput">
                  <input name="" id="c" placeholder="confirm password" value="" type="password"
                  data-mini="true">
              </div>
          </div>
          <a data-role="button" data-theme="c" href="#main">
              Register
          </a>
      </div>
  </div>
  <div data-role="page" data-control-title="Main" id="main">
      <div data-role="panel" id="panel1" data-position="left" data-display="push"
      data-theme="a">
          <ul data-role="listview" data-divider-theme="a" data-inset="false">
              <li data-role="list-divider" role="heading">
                  menu
              </li>
              <li data-theme="a">
                  <a href="#welcome" data-transition="slide">
                      sign out
                  </a>
              </li>
          </ul>
      </div>
      <div id="header" data-theme="c" data-role="header">
          <a data-controltype="panelbutton" data-role="button" data-theme="c" href="#panel1"
          data-icon="bars" data-iconpos="notext" class="ui-btn-left">
          </a>
          <h3>
              Main
          </h3>
      </div>
      <div data-role="content">
          <div data-controltype="textblock">
              <p>
                  <b>
                      Your options
                  </b>
              </p>
          </div>
          <div class="ui-grid-a">
              <div class="ui-block-a">
                  <a data-role="button" href="#main">
                      add food
                  </a>
              </div>
              <div class="ui-block-b">
                  <a data-role="button" href="#main">
                      add water
                  </a>
              </div>
              <div class="ui-block-a">
                  <a data-role="button" href="#main">
                      update
                  </a>
              </div>
              <div class="ui-block-b">
                  <a data-role="button" href="#main">
                      exercise
                  </a>
              </div>
          </div>
	  </div>
	  
	  <!--This is the section for the php implementation code from the database. Includes database connection and helloworld -->
	  <div>
		  	<?php
				$username = "geofit";
				$password = "charizard";
				$hostname = "localhost"; 

				//connection to the database
				$dbhandle = mysql_connect($hostname, $username, $password) 
				  or die("Unable to connect to MySQL");
				echo "Connected to MySQL<br>";
			?>
      </div>
  
  </div>
</body>
=======
    <head>
    	<title>Software Engineering Project - Group 12</title>
    </head>
    <body>
    	INDEX
    </body>
>>>>>>> 32678f1215ac6648d70070f1f157b4c19adf3e7f
</html>
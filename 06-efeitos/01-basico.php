<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Efeitos</title>

    <style>
        @font-face {
            font-family: Opens_Sans;
            src: url(../fonts/Open_Sans/OpenSans-Light.ttf);
        }
        * {
            font-family: Opens_Sans;
        }
        body {
            padding: 10%;
        }
        .button{
            display: inline-block;
            padding: 10px 15px;
            background: #09f;
            color: #fff;
            font-weight: bold;
            cursor: pointer;
        }
        .button:hover{
            background: #069;
        }
        div {
            display: block;
            margin-bottom: 20px;
            background: #069;
            color: #fff;
            padding: 20px;
        }
    </style>
</head>
<body>

    <div class="hide">jQuery Essentials Hide</div>
    <div class="show" style="display: none">jQuery Essentials Show</div>
    <div class="toggle">jQuery Essentials Toogle</div>

    <p class="j_button button">Rodar Efeito</p>
    
    <script src="../js/jquery.js"></script> 
    <script src="basico.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir Conteúdo [Eventos] | jQuery Essentials | UpInside</title>
    <style>
        * {
            font-family: "Arial" !important;
        }
        body {
            padding: 10%;
        }
        .button {
            display: inline-block;
            padding: 10px 15px;
            background: #09f;
            color: #fff;
            font-weight: bold;
            text-shadow: 1px 1px 0 #000;
            cursor: pointer;
        }
        .button:hover{
            background: #069;
        }

        div {
            background: #000;
            padding: 5px;
            margin-top: 10px;
            color: #fff;
            font-size: 0.8em;
        }
        div * {
            margin: 0;
        }

        .menu {
            display: none;
            position: absolute;
            left: 0;
            width: 100%;
            top: 100%;
            padding: 10px;
            background: #093;
            color: #fff;
            font-size: 0.8em;
            font-weight: 300;
        }
        .over {
            padding: 30px;
            color: #fff;
        }
        .over a {
            color: #fff;
            font-weight: bold;
        }
    </style>
</head>
<body>

    <p class="j_click button">click</p>
    <p class="j_dblclick button">dbclick</p>
    <p class="j_contextmenu button">contextmenu</p>
    <p class="j_hover button">hover</p>
    <p class="j_mousemove button">mousemove</p>

    <div class="j_over over">
        Este é um menu! <a href="#">Com Link!</a>
    </div>
    
    <script src="../js/jquery.js"></script>
    <script src="mouse.js"></script>
</body>
</html>
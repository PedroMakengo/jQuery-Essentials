<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir Conteúdo [Formulário] | jQuery Essentials | UpInside</title>
    <style>
        * {
            font-family: "Arial" !important;
        }
        body {
            padding: 10%;
        }
        input, textarea {
            display: block;
            width: 100%;
            padding: 20px;
            margin: 0 0 20px 0;
            border: 2px solid #ccc;
            border-radius: 5px;
            font-size: 1.2em;
        }

        .result {
            padding: 20px;
            background: #000;
            margin: 0 0 20px 0;
            width: 100%;
            color: #fff;
            border-radius: 5px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
        }
    </style>
</head>
<body>

    <div class="result"> Instruções:  <b></b></div>

    <form action="" method="POST">
        <input type="text" name="titulo" placeholder="Titulo: ">
        <textarea name="desc" rows="3" placeholder="Descrição: "></textarea>
        <div class="submit">
            <button>Enviar Agora!</button>
        </div>
    </form>

    
    
    <script src="../js/jquery.js"></script>
    <script src="formulario.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir Conteúdo [Encadeamento] | jQuery Essentials | UpInside</title>
    <style>
        body {
            padding: 10%;
        }
       
        .article {
            padding: 20px;
            border-bottom: 1px solid #eee;
        }
        .article_header {
            margin-bottom: 20px;
            border-bottom: 1px solid #eee;
        }
        .article_link {
            display: inline-block;
            padding: 10px 20px;
            background: #006699;
            color: #fff;
            text-decoration: none;
        }
        .active {
            background: #bf7676;
        }
        b {
            background: yellow;
        }
        .more {
            background:  #eee;
            padding: 10px 20px;
            width: 10%;
            color: #888;
            cursor: pointer;
            border-radius: 4px;
            -moz-border-radius: 4px;
            -webkit-border-radius: 4px;
        }
    </style>
</head>
<body>

    <article class="article">
        <header class="article_header">
            <h1>Curso jQuery Essentials</h1>
            <p>Aprender a trabalhar com a biblioteca javascript que está presente em mais de 77%
            dos principais sites do mundo. Escreva menos e faça mais.</p>
        </header>
        <div class="article_content">
            <p>Lorem ipsum dolor, sit amet <b>consectetur adipisicing </b>
            elit. Id, fugiat sapiente harum perferendis rerum asperiores 
            vel maxime nemo molestias optio nulla quis officia
             veniam repellat debitis quo, sit sequi laborum?</p>

            <p>Lorem ipsum dolor, sit amet <a href="#">into electronic</a>
            elit. Id, fugiat sapiente harum perferendis rerum p>

            <p>Lorem ipsum dolor, sit amet <b>consectetur adipisicing </b>
            elit. Id, fugiat sapiente harum perferendis rerum asperiores 
            vel maxime nemo molestias optio nulla quis officia
             veniam repellat debitis quo, sit sequi laborum?</p>
        </div>
    </article>
    
    <script src="../js/jquery.js"></script>
    <script src="encadeamento.js"></script>
</body>
</html>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir Conteúdo [Filtros] | jQuery Essentials | UpInside</title>
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
        .date {
            margin: 20px 0;
            font-size: 0.8em;
            color: #888;
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
            <p class="a"><b>CURSO ONLINE:</b> 100% EM VÍDEO AULAS COM SUPORTE E CERTIFICADO!</p>
            <p><b>13 VÍDEO AULAS:</b> DISTRIBUÍDAS EM 6 MÓDULOS COM MAIS DE 2H AULA!</p>
            <p class="a"><b>+ DE 208 ALUNOS:</b> ESTÃO ESTUDANDO E APRENDENDO NESTE CURSO.</p>
        </div>
        <a data-link="true" title="Saiba Mais" href="" class="article_link">Saíba mais...</a>
    </article>
    
    <script src="../js/jquery.js"></script>
    <script src="filtro.js"></script>
</body>
</html>
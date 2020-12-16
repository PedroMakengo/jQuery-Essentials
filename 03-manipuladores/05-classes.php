<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Inserir Conteúdo [around] | jQuery Essentials | UpInside</title>
    <style>
        body {
            padding: 10%;
        }
        div {
            background: #eee;
            padding: 15px;
            border-bottom: 1px solid #ccc;
        }
        div p {font-size: 0.8em; margin: 10px 0 0 0}
        .add {background: #000; color: #fff}
    </style>
</head>
<body>

    <div>
        <span>Hey, estamos aprendendo <b>jQuery</b> aqui!</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsa perferendis, veniam adipisci odio dolorem obcaecati, quisquam tempore veritatis officiis suscipit vero quia magni</p>
    </div>
    <div class="segunda" id="unico" data-action="este">
        <span>E com isso podemos criar interfaces incríveis!</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsa perferendis, veniam adipisci odio dolorem obcaecati, quisquam tempore veritatis officiis suscipit vero quia magni</p>
    </div>
    <div class="add">
        <span>Então #BoraProgramar!</span>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis ipsa perferendis, veniam adipisci odio dolorem obcaecati, quisquam tempore veritatis officiis suscipit vero quia magni</p>
    </div>
    
    <div>
        <input type="checkbox" checked="checked" value="email"> Input checado!
    </div>


    <script src="../js/jquery.js"></script>
    <script src="classes.js"></script>
</body>
</html>
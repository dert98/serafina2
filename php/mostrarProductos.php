<?php
function mostrarProducto() {
    include('php/connect.php');
    $sql = 'SELECT id, idcategoria, nombre, precio_venta, condicion FROM productos WHERE condicion = 1';
    $tabla = $connect->query($sql);
    $productos= $tabla->fetchAll(PDO::FETCH_OBJ);
    // $conect->close();
    $connect = null;
    return $productos;
}

function checkUrlImage($url) {
    $url = 'img/productos/thumb/'.$url.'-0.jpg'; 
    if (!empty($url) && file_exists($url)) {
        return $url;
    } else {
        return 'img/no-image.png';
    }
}

function verPrecio($precio) {    
    return '$'.number_format($precio,0);
}
?>
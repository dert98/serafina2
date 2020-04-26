<?php
function mostrarCategoria() {
    include('php/connect.php');
    $sql = 'SELECT id, nombre, descripcion, condicion FROM categorias WHERE condicion = 1';
    $tabla = $connect->query($sql);
    $categorias= $tabla->fetchAll(PDO::FETCH_OBJ);
    // $conect->close();
    $connect = null;
    return $categorias;
}

?>
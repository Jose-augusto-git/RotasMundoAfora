<?php
/**
 * Astra Child Theme functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Astra Child
 * @since 1.0.0
 */

/**
 * Define Constants
 */
define( 'CHILD_THEME_ASTRA_CHILD_VERSION', '1.0.0' );

/**
 * Enqueue styles
 */
function child_enqueue_styles() {

	wp_enqueue_style( 'astra-child-theme-css', get_stylesheet_directory_uri() . '/style.css', array('astra-theme-css'), CHILD_THEME_ASTRA_CHILD_VERSION, 'all' );

}

add_action( 'wp_enqueue_scripts', 'child_enqueue_styles', 15 );

add_action('wp_footer', 'ocultarIconeAoRolar');

function ocultarIconeAoRolar() {
    echo '<script>
        window.addEventListener("scroll", function() {
            var icon = document.querySelector(".custom-logo");
            if (window.scrollY > 100) {
                icon.style.display = "none";
            } else {
                icon.style.display = "block";
            }
        });
    </script>';
}


/*

add_action('wp_footer', 'mostrarIconeAoRolar');

function mostrarIconeAoRolar() {
    echo '<script>
window.addEventListener("scroll", function() {
    var icon = document.querySelector(".uagb-ifb-image-content");
    if (window.scrollY > 100) {
        icon.style.display = "block";
    } else {
        icon.style.display = "none";
    }
});

// Oculta o ícone no início
document.addEventListener("DOMContentLoaded", function() {
    var icon = document.querySelector(".uagb-ifb-image-content");
    icon.style.display = "none";
});
    </script>';
}*/



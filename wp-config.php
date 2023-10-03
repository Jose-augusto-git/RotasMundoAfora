<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'RotasMundoAfora' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'b$qOt !ae<1ZzJ?1be3V78+!nWsyT#DR~||w9t mB+1KM9E.*BQ!#&L](?KR{-+:' );
define( 'SECURE_AUTH_KEY',  'n!;$Rdzc!v%8KNp|{QCmE[KrSOmCQCzwNB0[a`TxzSUDRf&q=D8.a& !5T8V-FW<' );
define( 'LOGGED_IN_KEY',    'rb!Exhiey}iSW&-r4>Vn~.:L9?o090cHdF^!8<@QO]ULhe-FM%3Kk]B*-3tc,ak1' );
define( 'NONCE_KEY',        '_XLqRpEH4g4S]-24no6~>U)ERbcJ86{pov!IzTIS<DAjQ/7jg?Ipb7dkwK/#K]ze' );
define( 'AUTH_SALT',        'OjClH3}Q#$~t>gxnt)gtk3T%cj3|)gJ#2P8A}`tMUJRbZ!oBt-:VL5C/k|i6*LNS' );
define( 'SECURE_AUTH_SALT', 'N),7lS<z^AQ!Tud1L3uQ9;5-`nBF29i-=p$392%dm]9tf{9u.K$pN;hdn=l]=%v1' );
define( 'LOGGED_IN_SALT',   '93X},JU(r^NvH*cu2Pc8>INC0)gl?}PN<e~^3Lzc#juCs&q+ry!4M%At/+ 3iSWI' );
define( 'NONCE_SALT',       'J P!_z)!xf*Dbc&NH0AJ(-ecarS>*hhv__A{eE1N-0OGw}W&^n80G;%rNTk-/}iH' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'cp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';

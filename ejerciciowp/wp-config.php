<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'snoopy');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'HO^;Y62l+tMkD8/ S:87Z%TU]m+GA(]V=Gs(]5X9#/+oXhtlXCtv7KLNn:d7MQdA');
define('SECURE_AUTH_KEY',  'rk/L8zjkvB-dy%Ku0[pLCgZ6O| nz$w@TAF-?s+L K9,2sj)B3XL{@|-P(0pNv`.');
define('LOGGED_IN_KEY',    '2`JlS7/m!T+g=:0vV/Z;ysEg2I;WM2SoB,/=*a5*K;XvY*XRFb(L8koK/oJ^!cdt');
define('NONCE_KEY',        '][7{vhdiMio2815CsU*>D7OyoD5x<UX,#< Vtm1Y?^nFCYRK3,-@I#Uv%0 [qGtb');
define('AUTH_SALT',        'xx6m5K=zIf7H=!1~Qrjd4}f<R.{gt#)^VRn~26yR,cO=9i2xv]&H<Ia9em!S8xO{');
define('SECURE_AUTH_SALT', 'y1I&-r<s)iBc/3%Vc[)2!a~VhBYxzuO`pJ$YXysSBGOEwaqIuq%U|!/ImF/7.p8,');
define('LOGGED_IN_SALT',   'c!0H1F|L]%cc-S.YZ@%TO2NnC}+My+T5:=N)i0[.MX: >82%D]O+J&nv<;{1b;ES');
define('NONCE_SALT',       'j4<%$S+{Ve9*[S;IxB.AIzzm`K&RJCEMnQ@&tSHjs Oty!j2K(<up0KfD(d4+n9<');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

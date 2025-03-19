<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'puifchmy_WPEMR');

/** Database username */
define('DB_USER', 'puifchmy_WPEMR');

/** Database password */
define('DB_PASSWORD', 'vd-R1}}*p2$3mROir');

/** Database hostname */
define('DB_HOST', 'localhost');

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY', '87a4d111f477c9e057cc49107a9791456d4359aa734bd576c50becebb42c5902');
define('SECURE_AUTH_KEY', '10e24b129833acce409008590580b495b66d7894746748f07813b5f47b0d2467');
define('LOGGED_IN_KEY', '6d75c9d601f7a7ff880a95a135684ca469f7ba53fd60236df343f271dca5d99b');
define('NONCE_KEY', 'df737a90ac2a3a4e28cd03cf9cf598563b710106ddee35b16de374790478537d');
define('AUTH_SALT', '3a3174fd96eb7f96bc6ef03c9ecd847777b1dcebd9a1e103765bb6f9906c741c');
define('SECURE_AUTH_SALT', '16cedafe3335de22ed60f9ba72401f471750926c7503e129f0398cb008a036fd');
define('LOGGED_IN_SALT', '486a2cfb3f4f5edc2d5d6bbb689184a8ef1aa0bd1c5f803d3186bcbd8f5403e1');
define('NONCE_SALT', 'c04adf944fb67f6185921bdfedbeb30d016954ad36623755195fc04d488a432c');

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = '1Gv_';
define('WP_CRON_LOCK_TIMEOUT', 120);
define('AUTOSAVE_INTERVAL', 300);
define('WP_POST_REVISIONS', 20);
define('EMPTY_TRASH_DAYS', 7);
define('WP_AUTO_UPDATE_CORE', true);

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';

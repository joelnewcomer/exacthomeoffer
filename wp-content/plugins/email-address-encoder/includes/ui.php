
<div class="wrap">

    <h1><?php _e( 'Email Address Encoder', 'email-address-encoder' ); ?></h1>

    <div class="card" style="margin-bottom: 1.5rem;">
        <h2 class="title">
            <?php _e( 'Page Scanner', 'email-address-encoder' ); ?>
        </h2>
        <p>
            <?php _e( 'Scan your pages to see whether all your email addresses are protected.', 'email-address-encoder' ); ?>
        </p>
        <p>
            <a class="button button-secondary" target="_blank" rel="noopener" href="https://encoder.till.im/scanner?utm_source=wp-plugin&amp;utm_medium=banner&amp;domain=<?php echo urlencode( get_home_url() ) ?>">
                <?php _e( 'Open Page Scanner', 'email-address-encoder' ); ?>
            </a>
        </p>
    </div>

    <form method="POST" action="options.php">

        <?php settings_fields( 'email-address-encoder' ); ?>

        <table class="form-table">
            <tbody>

                <tr>
                    <th scope="row">
                        <?php _e( 'Search for emails using', 'email-address-encoder' ); ?>
                    </th>
                    <td>
                        <fieldset>
                            <legend class="screen-reader-text">
                                <span><?php _e( 'Search for emails using', 'email-address-encoder' ); ?></span>
                            </legend>
                            <label>
                                <input type="radio" name="eae_search_in" value="filters" <?php checked( 'filters', get_option( 'eae_search_in' ) ); ?>>
                                <?php _e( 'WordPress filters', 'email-address-encoder' ); ?>
                                <p class="description">
                                    <small><?php _e( 'Protects email addresses in filtered sections only.', 'email-address-encoder' ); ?></small>
                                </p>
                            </label>
                            <br>
                            <label>
                                <input type="radio" name="eae_search_in" value="filters" disabled>
                                <?php _e( 'Full page scan', 'email-address-encoder' ); ?>
                                (<a target="_blank" rel="noopener" href="https://encoder.till.im/download?utm_source=wp-plugin&utm_medium=setting"><?php _e( 'Premium only', 'email-address-encoder' ); ?></a>)
                                <p class="description">
                                    <small><?php _e( 'Protects all email addresses on your site.', 'email-address-encoder' ); ?></small>
                                </p>
                            </label>
                            <br>
                            <label>
                                <input type="radio" name="eae_search_in" value="void" <?php checked( 'void', get_option( 'eae_search_in' ) ); ?>>
                                <?php _e( 'Nothing', 'email-address-encoder' ); ?>
                                <p class="description">
                                    <small><?php _e( 'Turns off email protection.', 'email-address-encoder' ); ?></small>
                                </p>
                            </label>
                        </fieldset>
                    </td>
                </tr>

                <tr>
                    <th scope="row">
                        <?php _e( 'Protect emails using', 'email-address-encoder' ); ?>
                    </th>
                    <td>
                        <fieldset>
                            <legend class="screen-reader-text">
                                <span><?php _e( 'Protect emails using', 'email-address-encoder' ); ?></span>
                            </legend>

                            <label>
                                <input type="radio" name="eae_technique" value="entities" checked>
                                <?php _e( 'HTML entities', 'email-address-encoder' ); ?>
                                <p class="description">
                                    <small><?php _e( 'Offers good protection and works in most scenarios.', 'email-address-encoder' ); ?></small>
                                </p>
                            </label>
                            <br>

                            <label>
                                <input type="radio" name="eae_technique" value="css-direction" disabled>
                                <?php _e( 'CSS direction', 'email-address-encoder' ); ?>
                                (<a target="_blank" rel="noopener" href="https://encoder.till.im/download?utm_source=wp-plugin&utm_medium=setting"><?php _e( 'Premium only', 'email-address-encoder' ); ?></a>)
                                <p class="description">
                                    <small><?php _e( 'Protects against smart robots without the need for JavaScript.', 'email-address-encoder' ); ?></small>
                                </p>
                            </label>
                            <br>

                            <label>
                                <input type="radio" name="eae_technique" value="rot13" disabled>
                                <?php _e( 'ROT13 encoding', 'email-address-encoder' ); ?>
                                (<a target="_blank" rel="noopener" href="https://encoder.till.im/download?utm_source=wp-plugin&utm_medium=setting"><?php _e( 'Premium only', 'email-address-encoder' ); ?></a>)
                                <p class="description">
                                    <small><?php _e( 'Offers the best protection, but requires JavaScript.', 'email-address-encoder' ); ?></small>
                                </p>
                            </label>

                        </fieldset>
                    </td>
                </tr>

                <tr>
                    <th scope="row">
                        <?php _e( 'Filter priority', 'email-address-encoder' ); ?>
                    </th>
                    <td>
                        <input name="eae_filter_priority" type="number" min="1" value="<?php echo esc_attr( EAE_FILTER_PRIORITY ); ?>" class="small-text">
                        <p class="description" style="max-width: 40em;">
                            <?php _e( 'The filter priority specifies when the plugin searches for and encodes email addresses. The default value of <code>1000</code> ensures that all other plugins have finished their execution and no emails are missed.', 'email-address-encoder' ); ?>
                        </p>
                    </td>
                </tr>

                <tr>
                    <th scope="row">
                        <?php _e( 'Notices and promotions', 'email-address-encoder' ); ?>
                    </th>
                    <td>
                        <label for="eae_notices">
                            <?php if ( defined( 'EAE_DISABLE_NOTICES' ) ) : ?>
                                <input type="checkbox" name="eae_notices" id="eae_notices" value="1" checked disabled>
                            <?php else : ?>
                                <input type="checkbox" name="eae_notices" id="eae_notices" value="1" <?php checked( '1', get_option( 'eae_notices' ) ); ?>>
                            <?php endif; ?>
                            <?php _e( 'Hide notices and promotions for all users', 'email-address-encoder' ); ?>
                        </label>
                    </td>
                </tr>

            </tbody>
        </table>

        <p class="submit">
            <?php submit_button( null, 'primary large', 'submit', false ); ?>
        </p>

    </form>

</div>

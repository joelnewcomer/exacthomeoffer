<!DOCTYPE html>
<html>
    <head>
        <title><?php echo stripslashes($title); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <meta name="author" content="<?php echo esc_attr($author); ?>" />
        <meta name="description" content="<?php echo esc_attr($description); ?>" />
        <meta name="keywords" content="<?php echo esc_attr($keywords); ?>" />
        <meta name="robots" content="<?php echo esc_attr($robots); ?>" />
        <link rel="stylesheet" href="https://use.typekit.net/rgc3nrt.css">
		<?php
		if (!empty($styles) && is_array($styles)) {
			foreach ($styles as $src) {
				?>
				<link rel="stylesheet" href="<?php echo $src; ?>">
				<?php
			}
		}
		if (!empty($custom_css) && is_array($custom_css)) {
			echo '<style>' . implode(array_map('stripslashes', $custom_css)) . '</style>';
		}

		// do some actions
		do_action('wm_head'); // this hook will be removed in the next versions
		do_action('wpmm_head');
		?>
    </head>
    <body class="<?php echo $body_classes ? $body_classes : ''; ?>">
		<?php do_action('wpmm_after_body'); ?>

        <div class="wrap">
	        <svg xmlns="http://www.w3.org/2000/svg" id="exact-offer-logo" width="280" height="41" viewBox="0 0 280 41"><path fill="#BD1971" fill-rule="evenodd" d="M55.3260295,27.4127797 L63.5405753,27.4127797 C64.2410249,27.4127797 64.6616944,28.1831771 64.2789951,28.7648146 L56.1573763,41.1040529 C55.9655271,41.3958625 55.9665263,41.7723911 56.160374,42.0632099 L64.9199914,55.2114892 C65.3071872,55.7926313 64.8870173,56.5674876 64.1840697,56.5674876 L55.4764114,56.5674876 C55.1616587,56.5674876 54.8713868,56.4015177 54.7135108,56.1320025 L50.341446,48.6559283 C50.0122047,48.0921263 49.1988438,48.0713181 48.8406252,48.61778 L43.8840197,56.1701508 C43.7206481,56.417867 43.4433659,56.5674876 43.1451003,56.5674876 L34.9060738,56.5674876 C34.2021269,56.5674876 33.781957,55.7891633 34.1726501,55.2085166 L42.9727357,42.1186983 C43.1685818,41.8273841 43.1700807,41.4483784 42.9767326,41.1550824 L34.8056527,28.7653101 C34.4224538,28.1841679 34.8431233,27.4127797 35.5430733,27.4127797 L44.2312469,27.4127797 C44.531511,27.4127797 44.8117907,27.5648775 44.9736636,27.8160617 L48.7476982,33.6666224 C48.7776747,33.713193 48.797659,33.7657088 48.8051531,33.8207018 L49.5110984,38.8384407 C49.5295839,38.9697303 49.7209336,38.9702257 49.7404182,38.8394316 L50.4848333,33.8568684 C50.4928271,33.7998937 50.5143102,33.7453961 50.5477839,33.6978346 L54.5971023,27.7952535 C54.7609735,27.5559597 55.0342588,27.4127797 55.3260295,27.4127797 Z M9.7088716,27.1487143 L9.7088716,32.9234738 C9.7088716,33.4050341 10.1025623,33.7954348 10.5886803,33.7954348 L27.0477482,33.7954348 C27.5338662,33.7954348 27.9275569,34.1858355 27.9275569,34.6678911 L27.9275569,40.4956619 C27.9275569,40.9777176 27.5338662,41.3676229 27.0477482,41.3676229 L10.5886803,41.3676229 C10.1025623,41.3676229 9.7088716,41.7580236 9.7088716,42.2400793 L9.7088716,48.1228431 C9.7088716,48.6048987 10.1025623,48.9952994 10.5886803,48.9952994 L29.611234,48.9952994 C30.0973521,48.9952994 30.4910428,49.3857001 30.4910428,49.8667649 L30.4910428,55.6955266 C30.4910428,56.1770869 30.0973521,56.5674876 29.611234,56.5674876 L0.879309114,56.5674876 C0.393690672,56.5674876 0,56.1770869 0,55.6955266 L0,19.5765262 C0,19.0944705 0.393690672,18.7045652 0.879309114,18.7045652 L29.0117051,18.7045652 C29.4973235,18.7045652 29.8910142,19.0944705 29.8910142,19.5765262 L29.8910142,25.404297 C29.8910142,25.8863527 29.4973235,26.2767533 29.0117051,26.2767533 L10.5886803,26.2767533 C10.1025623,26.2767533 9.7088716,26.667154 9.7088716,27.1487143 Z M94.5871815,37.5275267 L94.5871815,55.6955266 C94.5871815,56.1770869 94.1934908,56.5674876 93.7073728,56.5674876 L86.2482335,56.5674876 C85.7626151,56.5674876 85.3689244,56.1770869 85.3689244,55.6955266 L85.3689244,55.359128 C85.3689244,54.6367877 84.5190921,54.2092295 83.9560345,54.6675045 C82.0655199,56.2053265 79.4840482,57 76.3684962,57 C70.095425,57 66.2774249,53.2139059 66.2774249,47.8587776 C66.2774249,42.3416429 70.2592963,39.096561 77.5685533,39.0425588 L85.3139676,39.0425588 L85.3139676,38.609551 C85.3139676,35.7429794 83.4049675,34.0119387 79.5869674,34.0119387 C77.3497252,34.0119387 74.4779816,34.7308111 71.6327172,36.0456885 C71.1780744,36.2557518 70.6394975,36.0640195 70.441653,35.6072309 L68.4731996,31.0665934 C68.2838484,30.629622 68.4836914,30.1168495 68.9218471,29.9231355 C73.1954893,28.0365291 77.1428877,26.9802673 81.7687531,26.9802673 C89.8414103,26.9802673 94.5327243,30.9288632 94.5871815,37.5275267 Z M85.3139676,46.5389458 L85.3139676,44.9446445 C85.3139676,44.4630842 84.9202769,44.0726836 84.4346585,44.0726836 L79.3686389,44.0726836 C76.5318678,44.0726836 75.1139819,45.0462081 75.1139819,47.2097612 C75.1139819,49.3193122 76.6412818,50.6713471 79.2592249,50.6713471 C82.1524516,50.6713471 84.6250089,49.1057808 85.2804939,46.7950843 C85.3039754,46.7118517 85.3139676,46.6246556 85.3139676,46.5389458 Z M124.874384,34.1045846 L119.558561,37.2931872 C119.196346,37.5101866 118.725216,37.4423123 118.449932,37.1237493 C117.106987,35.5725506 115.247948,34.6609551 112.951253,34.6609551 C109.296624,34.6609551 106.787595,37.6360264 106.787595,42.0171347 C106.787595,46.5067427 109.296624,49.4278119 112.951253,49.4278119 C115.344372,49.4278119 117.25687,48.5603098 118.531368,46.786662 C118.791164,46.4240055 119.291771,46.3264053 119.678467,46.5513316 L125.051745,49.6809778 C125.493898,49.9386026 125.614303,50.5098361 125.331525,50.9334308 C122.807009,54.7140751 118.278567,56.8919957 112.460138,56.8919957 C103.405253,56.8919957 97.2965527,50.9418532 97.2965527,42.0711368 C97.2965527,33.0924163 103.46021,27.0882715 112.569053,27.0882715 C118.021269,27.0882715 122.473771,29.165124 125.126686,32.834296 C125.428949,33.2524409 125.319035,33.838042 124.874384,34.1045846 Z M127.905503,28.7653101 L127.905503,19.9902122 C127.905503,19.5086519 128.299693,19.1182512 128.784812,19.1182512 L136.408322,19.1182512 C136.89444,19.1182512 137.287631,19.5086519 137.287631,19.9902122 L137.287631,28.8312026 C137.287631,29.3642878 137.765256,29.772524 138.295839,29.6942457 L143.97038,28.8594422 C144.501463,28.7816593 144.978588,29.1894002 144.978588,29.7219899 L144.978588,34.0054981 C144.978588,34.4870583 144.584898,34.877459 144.099279,34.877459 L138.16694,34.877459 C137.681322,34.877459 137.287631,35.2678597 137.287631,35.74942 L137.287631,46.2907342 C137.287631,48.5622916 138.269859,49.5353207 140.014988,49.481814 C140.785883,49.481814 141.725145,49.2479699 142.779316,48.859551 C143.260438,48.6826816 143.794519,48.9462516 143.934409,49.4357388 L145.33281,54.3296196 C145.444722,54.7210112 145.275355,55.1480739 144.910642,55.3333656 C142.858754,56.3772415 140.24181,57 137.669331,57 C131.996788,57 127.905503,53.8084248 127.905503,47.7507734 L127.905503,34.877459 L127.905503,28.7653101 Z M189.107416,37.5820243 C189.107416,48.6162937 180.271358,57 168.434658,57 C156.652416,57 147.816359,48.6702958 147.816359,37.5820243 C147.816359,26.5472594 156.652416,18.380057 168.434658,18.380057 C180.271358,18.380057 189.107416,26.6012615 189.107416,37.5820243 Z M157.743559,37.6360264 C157.743559,44.0186814 162.707658,48.9408019 168.544073,48.9408019 C174.434444,48.9408019 179.125758,44.0186814 179.125758,37.6360264 C179.125758,31.2528759 174.434444,26.4392552 168.544073,26.4392552 C162.652701,26.4392552 157.743559,31.2528759 157.743559,37.6360264 Z M200.616872,26.6012615 L200.616872,29.1155807 C200.616872,29.6749239 201.139961,30.0900962 201.690529,29.9662381 L206.197488,28.9525835 C206.747555,28.8292208 207.271644,29.2438977 207.271644,29.8027454 L207.271644,34.0054981 C207.271644,34.4870583 206.877953,34.877459 206.391835,34.877459 L201.495682,34.877459 C201.010563,34.877459 200.616872,35.2678597 200.616872,35.74942 L200.616872,55.6955266 C200.616872,56.1770869 200.222682,56.5674876 199.737064,56.5674876 L192.16851,56.5674876 C191.683392,56.5674876 191.289701,56.1770869 191.289701,55.6955266 L191.289701,26.0067427 C191.289701,19.5700856 196.198344,16 202.525873,16 C205.090358,16 207.826708,16.5955097 209.973021,17.6369085 C210.415673,17.8509353 210.596032,18.3825342 210.374706,18.8185147 L207.867675,23.748562 C207.641353,24.1934603 207.093284,24.345558 206.649133,24.1127048 C205.782814,23.6603751 204.827564,23.4101817 203.998715,23.4101817 C202.089715,23.3561796 200.616872,24.4377084 200.616872,26.6012615 Z M220.289415,26.6012615 L220.289415,29.1155807 C220.289415,29.6749239 220.812504,30.0900962 221.363072,29.9662381 L225.869531,28.9525835 C226.420098,28.8292208 226.943687,29.2438977 226.943687,29.8027454 L226.943687,34.0054981 C226.943687,34.4870583 226.549996,34.877459 226.064378,34.877459 L221.168225,34.877459 C220.682607,34.877459 220.289415,35.2678597 220.289415,35.74942 L220.289415,55.6955266 C220.289415,56.1770869 219.895225,56.5674876 219.409607,56.5674876 L211.841053,56.5674876 C211.355935,56.5674876 210.962244,56.1770869 210.962244,55.6955266 L210.962244,26.0067427 C210.962244,19.5700856 215.870887,16 222.198416,16 C224.7634,16 227.498751,16.5955097 229.645564,17.6369085 C230.088216,17.8509353 230.268575,18.3825342 230.046749,18.8185147 L227.540718,23.748562 C227.314396,24.1934603 226.766326,24.345558 226.321676,24.1127048 C225.455357,23.6603751 224.500107,23.4101817 223.670759,23.4101817 C221.762258,23.3561796 220.289415,24.4377084 220.289415,26.6012615 Z M257.365284,44.505196 L238.761402,44.505196 C238.145386,44.505196 237.701235,45.1249819 237.938548,45.6887839 C239.081151,48.4077167 241.392335,49.9143265 244.462922,49.9143265 C246.7816,49.9143265 249.056313,49.0735777 250.922347,47.4718449 C251.262579,47.1805307 251.774677,47.2062932 252.096424,47.5179202 L255.834487,51.1439896 C256.194205,51.4927739 256.179716,52.0630166 255.818,52.4093238 C252.844836,55.2521147 248.670116,56.8919957 243.645065,56.8919957 C235.77225,56.8919957 230.321033,52.890884 228.613875,46.5592585 C225.462351,34.8710184 236.810934,24.4332496 248.543216,27.7531418 C255.199486,29.6362801 258.524374,35.412526 258.24859,43.666429 C258.233103,44.1336217 257.836914,44.505196 257.365284,44.505196 Z M248.216473,39.4750713 C248.740061,39.4750713 249.159732,39.0202644 249.094783,38.5045193 C248.715081,35.489318 246.546285,33.5789308 243.480694,33.5789308 C240.563985,33.5789308 238.469631,35.4704916 237.624795,38.371248 C237.463921,38.9236551 237.89808,39.4750713 238.477125,39.4750713 L248.216473,39.4750713 Z M271.974306,30.307591 C273.779388,28.3957175 276.182499,27.26415 279.031761,27.0263425 C279.549854,26.9832399 280,27.3825584 280,27.8983034 L280,34.4949853 C280,34.9795181 279.600314,35.379332 279.112198,35.3649645 C274.186068,35.2183165 270.957605,37.6712021 270.463493,41.5152617 C270.457997,41.5608415 270.455499,41.6079076 270.455499,41.6529919 L270.455499,55.6955266 C270.455499,56.1770869 270.061809,56.5674876 269.575691,56.5674876 L261.897723,56.5674876 C261.412105,56.5674876 261.018414,56.1770869 261.018414,55.6955266 L261.018414,28.2852361 C261.018414,27.8031804 261.412105,27.4127797 261.897723,27.4127797 L269.575691,27.4127797 C270.061809,27.4127797 270.455499,27.8031804 270.455499,28.2852361 L270.455499,29.7170356 C270.455499,30.5087365 271.428235,30.8852651 271.974306,30.307591 Z" transform="translate(0 -16)"></path></svg>
			<?php if (!empty($heading)) { ?><h1><?php echo stripslashes($heading); ?></h1><?php } ?>

			<?php 
				// If bot is enabled no text will be shown
				if ( !empty($text) && $this->plugin_settings['bot']['status'] === 0) {
					echo "<h2>" . stripslashes($text) . "</h2>";
				}
			?>


            <?php if (!empty($this->plugin_settings['bot']['status']) && $this->plugin_settings['bot']['status'] === 1) { ?>
			</div><!-- .wrap -->
			<div class="bot-container">
                <!-- WP Bot -->
                <div class="bot-chat-wrapper">
                    <!-- Chats -->
                    <div class="chat-container cf"></div>
                    <!-- User input -->
                    <div class="input"></div>
                    <!-- User choices -->
                    <div class="choices cf"></div>
                </div>
                <!-- /WP Bot -->
			</div>
			<div class="bot-error"><p></p></div>
        	<div class="wrap under-bot">
            <?php } ?>

			<?php
			if (!empty($this->plugin_settings['modules']['countdown_status']) && $this->plugin_settings['modules']['countdown_status'] == 1) {
				?>
				<div class="countdown" data-start="<?php echo date('F d, Y H:i:s', strtotime($countdown_start)); ?>" data-end="<?php echo date('F d, Y H:i:s', $countdown_end); ?>"></div>
			<?php } ?>

			<?php if (!empty($this->plugin_settings['modules']['subscribe_status']) && $this->plugin_settings['modules']['subscribe_status'] == 1
                      // If the bot is active, legacy subscribe form will be hidden
                      // !empty($this->plugin_settings['bot']['status']) && 
                      && $this->plugin_settings['bot']['status'] === 0 ) { ?>
				<?php if (!empty($this->plugin_settings['modules']['subscribe_text'])) { ?><h3><?php echo stripslashes($this->plugin_settings['modules']['subscribe_text']); ?></h3><?php } ?>
				<div class="subscribe_wrapper" style="min-height: 100px;">
					<form class="subscribe_form">
						<div class="subscribe_border">
							<input type="text" placeholder="<?php _e('your e-mail...', $this->plugin_slug); ?>" name="email" class="email_input" data-rule-required="true" data-rule-email="true" data-rule-required="true" data-rule-email="true" />
							<input type="submit" value="<?php _e('Subscribe', $this->plugin_slug); ?>" />
						</div>
						<?php if (!empty($this->plugin_settings['gdpr']['status']) && $this->plugin_settings['gdpr']['status'] == 1) { ?>
							<div class="privacy_checkbox">
								<label>
									<input type="checkbox" name="acceptance" value="YES" data-rule-required="true" data-msg-required="<?php esc_attr_e('This field is required.', $this->plugin_slug); ?>">
									
									<?php _e("I've read and agree with the site's privacy policy", $this->plugin_slug); ?>
								</label>
							</div>
						
							<?php if(!empty($this->plugin_settings['gdpr']['subscribe_form_tail'])) { ?>
								<p class="privacy_tail"><?php echo $this->plugin_settings['gdpr']['subscribe_form_tail']; ?></p>
						<?php }} ?>
					</form>
				</div>
			<?php } ?>

			<?php if (!empty($this->plugin_settings['modules']['social_status']) && $this->plugin_settings['modules']['social_status'] == 1) { ?>
				<div class="social" data-target="<?php echo !empty($this->plugin_settings['modules']['social_target']) ? 1 : 0; ?>">
					<?php if (!empty($this->plugin_settings['modules']['social_twitter'])) { ?>
						<a class="tw" href="<?php echo stripslashes($this->plugin_settings['modules']['social_twitter']); ?>">twitter</a>
					<?php } ?>

					<?php if (!empty($this->plugin_settings['modules']['social_facebook'])) { ?>
						<a class="fb" href="<?php echo stripslashes($this->plugin_settings['modules']['social_facebook']); ?>">facebook</a>
					<?php } ?>

					<?php if (!empty($this->plugin_settings['modules']['social_instagram'])) { ?>
						<a class="instagram" href="<?php echo stripslashes($this->plugin_settings['modules']['social_instagram']); ?>">instagram</a>
					<?php } ?>    

					<?php if (!empty($this->plugin_settings['modules']['social_pinterest'])) { ?>
						<a class="pin" href="<?php echo stripslashes($this->plugin_settings['modules']['social_pinterest']); ?>">pinterest</a>
					<?php } ?>

					<?php if (!empty($this->plugin_settings['modules']['social_github'])) { ?>
						<a class="git" href="<?php echo stripslashes($this->plugin_settings['modules']['social_github']); ?>">github</a>
					<?php } ?>

					<?php if (!empty($this->plugin_settings['modules']['social_dribbble'])) { ?>
						<a class="dribbble" href="<?php echo stripslashes($this->plugin_settings['modules']['social_dribbble']); ?>">dribbble</a>
					<?php } ?>

					<?php if (!empty($this->plugin_settings['modules']['social_google+'])) { ?>
						<a class="gplus" href="<?php echo stripslashes($this->plugin_settings['modules']['social_google+']); ?>">google plus</a>
					<?php } ?>

					<?php if (!empty($this->plugin_settings['modules']['social_linkedin'])) { ?>
						<a class="linkedin" href="<?php echo stripslashes($this->plugin_settings['modules']['social_linkedin']); ?>">linkedin</a>
					<?php } ?>
				</div>
			<?php } ?>
			<?php if (!empty($this->plugin_settings['modules']['contact_status']) && $this->plugin_settings['modules']['contact_status'] == 1) { ?>
				<div class="contact">
					<?php list($open, $close) = !empty($this->plugin_settings['modules']['contact_effects']) && strstr($this->plugin_settings['modules']['contact_effects'], '|') ? explode('|', $this->plugin_settings['modules']['contact_effects']) : explode('|', 'move_top|move_bottom'); ?>
					<div class="form <?php echo esc_attr($open); ?>">
                        <span class="close-contact_form">
							<img src="<?php echo WPMM_URL ?>assets/images/close.svg" alt="">
						</span>

						<form class="contact_form">
							<?php do_action('wpmm_contact_form_start'); ?>

							<p class="col"><input type="text" placeholder="<?php _e('Name', $this->plugin_slug); ?>" data-rule-required="true" data-msg-required="<?php esc_attr_e('This field is required.', $this->plugin_slug); ?>" name="name" class="name_input" /></p>
							<p class="col last"><input type="text" placeholder="<?php _e('E-mail', $this->plugin_slug); ?>" data-rule-required="true" data-rule-email="true" data-msg-required="<?php esc_attr_e('This field is required.', $this->plugin_slug); ?>" data-msg-email="<?php esc_attr_e('Please enter a valid email address.', $this->plugin_slug); ?>" name="email" class="email_input" /></p>
							<br clear="all" />

							<?php do_action('wpmm_contact_form_before_message'); ?>

							<p><textarea placeholder="<?php _e('Your message', $this->plugin_slug); ?>" data-rule-required="true" data-msg-required="<?php esc_attr_e('This field is required.', $this->plugin_slug); ?>" name="content" class="content_textarea"></textarea></p>

							<?php do_action('wpmm_contact_form_after_message'); ?>

							<?php if (!empty($this->plugin_settings['gdpr']['status']) && $this->plugin_settings['gdpr']['status'] == 1) { ?>
								<div class="privacy_checkbox">
									<label>
										<input type="checkbox" name="acceptance" value="YES" data-rule-required="true" data-msg-required="<?php esc_attr_e('This field is required.', $this->plugin_slug); ?>">
										
										<?php _e("I've read and agree with the site's privacy policy", $this->plugin_slug); ?>
									</label>
								</div>
							
								<?php if(!empty($this->plugin_settings['gdpr']['contact_form_tail'])) { ?>
									<p class="privacy_tail"><?php echo $this->plugin_settings['gdpr']['contact_form_tail']; ?></p>
								<?php }} ?>
							<p class="submit"><input type="submit" value="<?php _e('Send', $this->plugin_slug); ?>"></p>

							<?php do_action('wpmm_contact_form_end'); ?>
						</form>
					</div>
				</div>

				<a class="contact_us" href="javascript:void(0);" data-open="<?php echo esc_attr($open); ?>" data-close="<?php echo esc_attr($close); ?>"><?php _e('Contact us', $this->plugin_slug); ?></a>
			<?php } ?>

			<?php if ((!empty($this->plugin_settings['general']['admin_link']) && $this->plugin_settings['general']['admin_link'] == 1) ||
					  (!empty($this->plugin_settings['gdpr']['status']) && $this->plugin_settings['gdpr']['status'] == 1)) { ?>
				<div class="author_link">
					<?php if($this->plugin_settings['general']['admin_link'] == 1) { ?>
						<a href="<?php echo admin_url(); ?>"><?php _e('Dashboard', $this->plugin_slug); ?></a> 
					<?php } ?>
					<?php if ($this->plugin_settings['gdpr']['status'] == 1) { ?>
						<a href="<?php echo $this->plugin_settings['gdpr']['policy_page_link']; ?>"><?php echo $this->plugin_settings['gdpr']['policy_page_label']; ?></a>
					<?php } ?>
				</div>
			<?php } ?>
        </div>

        <script type='text/javascript'>
			var wpmm_vars = {"ajax_url": "<?php echo admin_url('admin-ajax.php'); ?>"};
		</script>

		<?php
		
		// Hook before scripts, mostly for internationalization
		do_action('wpmm_before_scripts');

		if (!empty($scripts) && is_array($scripts)) {
			foreach ($scripts as $src) {
				?>
				<script src="<?php echo $src; ?>"></script>
				<?php
			}
		}
		// Do some actions
		do_action('wm_footer'); // this hook will be removed in the next versions
		do_action('wpmm_footer');
		?>
        <?php if (!empty($this->plugin_settings['bot']['status']) && $this->plugin_settings['bot']['status'] === 1) { ?>
            <script type='text/javascript'>
                jQuery(function($) {
                    startConversation('homepage', 1);
                });
            </script>
        <?php } ?>
    </body>
</html>
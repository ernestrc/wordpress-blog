<?php
/**
 * The main template file.
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * For example, it puts together the home page when no home.php file exists.
 *
 * Learn more: http://codex.wordpress.org/Template_Hierarchy
 *
 * @since 1.0.0
 */
$bavotasan_theme_options = bavotasan_theme_options();
get_header(); ?>
	<?php if ( ( $bavotasan_theme_options['home_posts'] && is_front_page() ) || ! is_front_page() ) { ?>
	<div class="container">
        <div class="row" style="margin-top:100px;">
            <div id="primary" class="col-md-8 col-sm-12">
                <?php
                if ( have_posts() ) :
                    while ( have_posts() ) : the_post();
                        get_template_part( 'content', get_post_format() );
                    endwhile;

                    bavotasan_pagination();
                else :
                    ?>
                    <article id="post-0" class="post no-results not-found" style="">

                        <?php if ( current_user_can( 'edit_posts' ) ) :
                            // Show a different message to a logged-in user who can add posts.
                            ?>
                            <h1 class="entry-title"><?php _e( 'No posts to display', 'ward' ); ?></h1>

                            <div class="entry-content">
                                <p><?php printf( __( 'Ready to publish your first post? <a href="%s">Get started here</a>.', 'ward' ), admin_url( 'post-new.php' ) ); ?></p>
                            </div><!-- .entry-content -->

                        <?php
                        else :
                            get_template_part( 'content', 'none' );
                        endif; // end current_user_can() check
                        ?>

                    </article><!-- #post-0 -->
                <?php
                endif;
                ?>
            </div>
            <div id="secondary" class="md-col-4" role="complementary">
                <a class="twitter-timeline" href="https://twitter.com/ernestrc_" width="300" height="500" data-widget-id="478723011973894145">Tweets by @ernestrc_</a>
                <script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");</script>
            </div><!-- #secondary.widget-area -->
        </div>
	</div>


	<?php }	?>
<?php get_footer(); ?>
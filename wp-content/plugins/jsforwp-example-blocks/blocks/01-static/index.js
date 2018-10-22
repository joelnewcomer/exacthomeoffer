/**
 * Block dependencies
 */
import icon from './icon';
import './style.scss';
import './editor.scss';

/**
 * Internal block libraries
 */
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

/**
 * Register block
 */
export default registerBlockType(
    'jsforwpblocks/static',
    {
        title: __( 'Example - Static Block', 'jsforwpblocks' ),
        description: __( 'Demonstration of how to make a static call to action block.', 'jsforwpblocks' ),
        category: 'common',
        icon,
        keywords: [
            __( 'Banner', 'jsforwpblocks' ),
            __( 'CTA', 'jsforwpblocks' ),
            __( 'Shout Out', 'jsforwpblocks' ),
        ],
        edit: props => {
          const { className, isSelected } = props;
          return (
            <div className={ className }>
              <h2>{ __( 'Static Call to Action', 'jsforwpblocks' ) }</h2>
              <p>{ __( 'This is really important!', 'jsforwpblocks' ) }</p>
              {
                isSelected && (
                  <p className="sorry warning">{ __( '✋ Stop clicking me! I\'m static! ✋', 'jsforwpblocks' ) }</p>
                )
              }
            </div>
          );
        },
        save: props => {
          return (
            <div>
              <h2>{ __( 'Call to Action', 'jsforwpblocks' ) }</h2>
              <p>{ __( 'This is really important!', 'jsforwpblocks' ) }</p>
            </div>
          );
        },
    },
);

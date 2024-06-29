/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save( {attributes} ) {
  const blockProps = useBlockProps.save();

	return (
		<div { ...useBlockProps.save({ className: 'formo-slider-slide-cheese formo-slider-slide' }) }>
      <div className="wp-block-columns has-formo-cream-color has-text-color has-link-color">
        <div className="wp-block-column span3 gridline content-column">
          <div className="overflow-width">
            <RichText.Content { ...useBlockProps.save({
              className: 'has-formo-yellow-color has-text-color has-link-color formo-slider-slide-cheese-head' 
            }) } 
              tagName="h2"
              value={attributes.contentHead} 
            />
          </div>
          <RichText.Content { ...useBlockProps.save({
            className: 'has-formo-yellow-color has-text-color has-link-color has-roobert-font-family has-large-font-size formo-slider-slide-cheese-subhead'
          }) } 
            tagName="h3" 
            value={attributes.contentSubHead}
          />
          <RichText.Content { ...useBlockProps.save(
            {className: 'formo-slider-slide-cheese-p'}
          ) } 
            tagName="p" 
            value={attributes.content}
          />
          <div className="wp-block-buttons">
            <div className="wp-block-button">
              <RichText.Content { ...useBlockProps.save(
                {className: 'wp-block-button__link has-formo-blue-color has-formo-cream-background-color has-text-color has-background has-link-color wp-element-button'}
              ) } 
                tagName="a" 
                href={attributes.buttonLink}
                value={attributes.buttonText}
              />
            </div>
          </div>
        </div>
        <div className="wp-block-column span6 gridline cheese-image">
          <div className="offset1 span8">
            <InnerBlocks.Content />
          </div>
        </div>
        <div className="wp-block-column  span3"></div>
      </div>
		</div>
	);
}

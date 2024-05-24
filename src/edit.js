import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks, URLInputButton } from '@wordpress/block-editor';
import './editor.scss';

export default function Edit( {attributes, setAttributes} ) {

	return (
		<div { ...useBlockProps(
      {className: 'formo-slider-slide-cheese formo-slider-slide'}
    ) }>
      <div className='wp-block-columns has-formo-cream-color has-text-color has-link-color'>
        <div className="wp-block-column span3 gridline content-column">
          <div className="overflow-width">
            <RichText
              tagName='h2'
              className='has-formo-yellow-color has-text-color has-link-color has-xxxx-large-font-size formo-slider-slide-cheese-head'
              value={attributes.contentHead}
              onChange={(value) => {
                setAttributes({ contentHead: value });
              }}
              placeholder={__('Add a title', 'formo-slider-slide-cheese')}
            />
          </div>
          <RichText
            tagName='h3'
            className='has-formo-yellow-color has-text-color has-link-color has-roobert-font-family has-large-font-size formo-slider-slide-cheese-subhead'
            value={attributes.contentSubHead}
            onChange={(value) => {
              setAttributes({ contentSubHead: value });
            }}
            placeholder={__('Add a subtitle', 'formo-slider-slide-cheese')}
          />
          <RichText
            tagName='p'
            className='has-formo-cream-color has-text-color has-link-color'
            value={attributes.content}
            onChange={(value) => {
              setAttributes({ content: value });
            }}
            placeholder={__('Add a description', 'formo-slider-slide-cheese')}
          />
          <div className='formo-slider-slide-cheese-button'>
            <RichText
              tagName='a'
              className='wp-block-button__link has-formo-blue-color has-formo-cream-background-color has-text-color has-background has-link-color wp-element-button'
              value={attributes.buttonText}
              onChange={(value) => {
                setAttributes({ buttonText: value });
              }}
              placeholder={__('Add a button text', 'formo-slider-slide-cheese')}
              disableLineBreaks={true}
              allowedFormats={ [ 'core/bold', 'core/italic' ] }
            />
            <div className='url'>
              <URLInputButton
                url={attributes.buttonLink}
                onChange={(url) => {
                  setAttributes({ buttonLink: url });
                }}
              />
            </div>
          </div>
        </div>
        <div className="wp-block-column span6 gridline cheese-image">
          <div className='offset1 span8'>
            <InnerBlocks 
              allowedBlocks={['core/image']}
              template={[['core/image']]}
              templateLock='insert'
            />
          </div>
        </div>
        <div className="wp-block-column span3"></div>
      </div>
		</div>
	);
}

# Changelog

## [v1.3.6](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.3.6)
### 12/23/2025

**Improved:**
* Hide empty rows in responsive tables
* Left align rows in responsive tables
* Version-lock Font Awesome CSS assets
* Minor refresh of Sidebar UI

## [v1.3.5](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.3.5)
### 11/26/2025

**New:**
* Added sidebar banner image support via HTML image
* Automatic image path resolution for HTML image assets using data-src attribute relative to site base path with fallback support
* Added (long overdue) basic support for printing

**Improved:**
* Improved support for Docsify configuration settings of 'topMargin'

**Bugfix:**
* Restored missing content-max-width default

## [v1.3.4](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.3.4)
### 08/01/2025

**New:**
* Added CSS Markdown classes to support cards (`card` & `card-rounded`) and responsive card lists (`card-list`)
* Added CSS Markdown classes to support header overlays on full-width images (`header-image-full-width-headings-overlay` and `header-tall-image-full-width-headings-overlay`)
* Added support for topic index using standard links in first paragraph

**Improved:**
* Updated ReadMe
* Improve visual design of h1 and h2 below top full width image (use HTML tags to keep default styling)

**Bugfix:**
* Minor CSS fixes

## [v1.3.3](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.3.3)
### 07/02/2025

**Improved:**
* Updated to use latest docsify-footnotes plugin (v2.2.1)

## [v1.3.2](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.3.2)
### 04/09/2025

**Bugfix:**
* Set margin instead of padding for images contained in columns

## [v1.3.1](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.3.1)
### 03/04/2025

**Improved:**
* Various minor enhancements to Search plugin
* Adjusted default behaviour of image grid to add needed whitespace (padding) instead of cropping when source images are of different sizes (thanks to a helpful discussion with @davidmalawey)

**Bugfix:**
* Fixed incorrect theme CSS with regards to image scaling (with thanks and appreciation to @harlows for the PR)

## [v1.3.0](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.3.0)
### 02/04/2025

**New:**
* Support for image grid plugin, including customizations (with thanks and appreciation to @gllmAR)
* Include zoom image plugin (not enabled by default)
* Use of Docsify and Docsify Themeable preview build assets for access to upcoming Docsify accessibility enhancements authored by @jhildenbiddle (with thanks and appreciation to John and tested extensively in Docsify-This)

**Improved:**
* Updated ReadMe
* Updated example custom CSS for Moodle LMS
* Updated to latest stable Docsify 4.x preview build (including Marked 4.2.12)
* Support horizontal scrolling in code blocks
* Updated example Coverpage title
* Adjusted bottom margin for summary elements
* Match Docsify-This CSS with Docsify Starter Kits CSS
* Browser-level image lazy loading via plugin 'docsify-loading' no longer enabled by default to match updated Docsify-This behaviour
* Default search plugin settings adjusted to match Docsify-This

## [v1.2.20](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.20)
### 12/03/2024

**New:**
* Added default setting of false for `mergeNavbar` to move Navbar items to the top of the Sidebar on smaller screens

**Improved:**
* Updated CSS with word-wrap for code blocks
* Use of window.matchMedia.addListener replaced with window.matchMedia.addEventListener
* Cleanup HTML
* Match Docsify-This CSS with Docsify Starter Kits CSS

**Bugfix:**
* Scroll offset fix (with thanks and appreciation to @rizdaprasetya for the initial code)
* Added missing Markdown Prism language file
* Fix formatting conflict with Prism formatted code blocks

## [v1.2.19](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.19)
### 10/09/2024

**Improved:**
* Minor theme update

## [v1.2.18](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.18)
### 09/03/2024

**Improved:**
* Updated ReadMe

## [v1.2.17](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.17)
### 07/23/2024

**Improved:**
* Improve accessibility of Font Awesome icons when used for decorative elements (automatic addition of `aria-hidden` attribute assuming decorative icons)

## [v1.2.16](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.16)
### 06/24/2024🏒

**Improved:**
* Adjusted bottom margin for summary elements
* Improved Search plugin results list presentation, including source page title when appropriate

**Bugfix:**
* Check the global variable 'standalone' when setting externalLinkTarget

## [v1.2.15](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.15)
### 06/03/2024

**Improved:**
* Added CSS Markdown class to support responsive HTML images `responsive`

**Bugfix:**
* Added CSS to automatically wrap links that overflow
* Added CSS to automatically wrap code blocks that overflow
* Added CSS to better vertically align 'Edit this Page' emoji and text

## [v1.2.14](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.14)
### 04/29/2024

**Bugfix:**
* Remove CSS for use with accordion elements with plain details/summary elements

## [v1.2.13](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.13)
### 03/04/2024

**New:**
* Support for the Browser-level image lazy loading (with thanks and appreciation to @sy-records for the source plugin 'docsify-loading')

**Improved:**
* Add ability to define custom colors for badges (with thanks to @cmadland for the example use of colored badges)
* Updated ReadMe
* Updated Editor.css file for improved Markdown previews
* Use docsify-loading plugin rather than added Javascript
* Updated example content to include use of footnote
* Reorganize and update custom assets (as used in Docsify-This)

**Bugfix:**  
* Include missing docsify-footnotes plugin

## [v1.2.12](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.12)
### 02/09/2024

**New:**
* Added CSS Markdown class for right-aligned columns `column-right`
* Added CSS Markdown class for full width background gradient header image (`header-image-fade-full-width`)

**Improved:**  
* ReadMe updated

## [v1.2.11](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.11)
### 01/18/2024

**New:**  
* Added CSS Markdown class `reverse-columns`
* Added CSS Markdown class for taller full width header image `header-tall-image-full-width`
* Added CSS Markdown class for rounded button `button-rounded`
* Added CSS Markdown classes for secondary buttons `button-secondary` and `button-secondary-rounded`

**Improved:**  
* Improved image alignment with two column layouts
* Improved contrast for unselected Tabs
* Improved support of logo image in Docsify Sidebar
* Adjusted display of full width header image

## [v1.2.10](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.10)
### 11/27/2023

**Improved:**  
* Added 'onedrive.live.com' to domains made responsive through the automatic addition of the CSS Markdown class `video-container-16by9`

## [v1.2.9](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.9)
### 11/15/2023

**Improved:**  
* ReadMe updated

## [v1.2.8](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.8)
### 08/31/2023

**Improved:**  
* ReadMe updated

## [v1.2.7](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.7)
### 08/25/2023

**Improved:**  
* Updated example custom CSS for LMSs
* Cleanup default CSS
* Adjusted badge colours for dark theme
* Use light/dark theme display for topic indexes
* Clarify light + dark theme use comments
* ReadMe updated

## [v1.2.6](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.6)
### 08/15/2023

**New:**  
*  Support for nav pill (`navpill`) Markdown CSS class

**Improved:**  
* Added 'youtube-nocookie.com' to domains made responsive through the automatic addition of the CSS Markdown class `video-container-16by9`

**Improved:**  
* ReadMe updated

## [v1.2.5](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.5)
### 06/27/2023

**Improved:**  
* Match Docsify-This Markdown file rendering with Docsify Starter Kits CSS (incl. faded header image ToC adjustments and automatic responsive iFrames for YouTube and Google Docs embeds)

## [v1.2.4](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.4)
### 05/08/2023

**Improved:**  
* Refined responsize header line heights

## [v1.2.3](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.3)
### 04/09/2023

**Improved:**  
* Set font of buttons to sans-serif
* Set font of badges to sans-serif
* Refined responsize header font size and line heights

## [v1.2.2](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.2)
### 03/13/2023

**Improved:**  
* Restore initial header spacing except for alerts and blockquotes
* ReadMe updated
* Renamed 'coverpage.md' file to default '_coverpage.md'

## [v1.2.1](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.1)
### 02/13/2023

**New:**
* Support for images with border and rounded border (`image-border`,`image-border-rounded`)
* Support for 75%, 50% and 25% scaled images with border (`image-75-border`,`image-50-border` and `image-25-border`)

**Improved:**  
* Consolidate and simplify example custom CSS for LMSs
* Additional support and improvements for optional dark mode
* Match Docsify-This CSS with Docsify Starter Kits CSS

## [v1.2.0](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.2.0)
### 01/02/2023

**New:**
* Support for 75%, 50% and 25% scaled images (`image-75`,`image-50` and `image-25`)
* Additional languages for Prismjs (Bash, Go, Java, Kotlin, PHP, Python and Swift in addition to the base set https://docsify.js.org/#/language-highlight?id=language-highlighting)

**Improved:**
* Adjust page margins when content is being embedded
* Adjust margins and padding for alerts and blockquotes
* Increase clickable areas for Topics alphabetical index
* ReadMe updated

## [v1.1.4](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.1.4)
### 01/17/2023

**New:**
* Support for optionaly showing the navbar when embedded/standalone (now fully supported with v1.1.2 release)
* Support for displaying a footer ('_footer.md' file) via 'footer' setting in index.html or using the URL parameter 'footer=true'

**Improved:**
* Adjusted opacity of 'header-image-fade' class for improved accessibility

**Bugfix:**  
* Pass 'navbar' URL parameter for page-to-page navigation links

## [v1.1.3](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.1.3)
### 12/15/2022

**New**
* Support for background gradient header image (`header-image-fade`, with thanks to Jamie Adam for original CSS)
* Support for full-width header image (`header-image-full-width`, optional Table of Contents not available)

**Improved:**
* ReadMe updated

## [v1.1.2](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.1.2)
### 11/23/2022

**Improved:**
* Aligned ToC CSS with Docsify-This.net
* Support for scrolling of Table of Contents
* ReadMe updated
* Removed deprecated emoji plugin (as of Docsify v4.13)
* Support for page-to-page navigation when embedded/standalone
* Update example content
* Removed unneeded local ToC plugin assets
* Changed support for light/dark Themeable theme switching to optional

## [v1.1.1](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.1.1)
### 09/02/2022

**Improved:**  
* Reduced page margins when displayed as embedded or standalone
* Adjusted font size and line height for Topics index items
* Added example CSS colours to be the same as Sakai LMS
* Streamlined settings for custom CSS colours
* Updated default site footer behaviour and appearance
* Simplified 'ToC' setting in index.html
* Reduced left margin of page Table of Contents on smaller screens
* Updated Table of Contents plugin items
* Improved example alt text for images
* Added Editor.css file for better Markdown previews
* Improved display of Table of Contents on smaller screens
* Added new Themeable support for light/dark theme switching (OS-level)
* Adjusted link colours for dark theme

**Bugfix:**  
* Added missing Sidebar name and link colour settings
* Support the removal of the '_sidebar.md' file with standalone setting
* Remove unused CSS resources
* Fixed embedded code blocks overflow issues

## [v1.1.0](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.1.0)
### 05/30/2022

**Improved:**  
* Aligned default link colour to be the same as Canvas LMS
* Added example link colours to be the same as Moodle LMS
* Adjusted left Markdown section padding
* Adjusted margins for site name in Sidebar
* Updated example site content
* Added 'standalone' setting in index.html to permanently alter the display of all pages (i.e. hidden Sidebar and Navbar)

**Bugfix:**  
* Fixed 'hidegitlink' URL parameter detection

## [v1.0.8](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.8)
### 03/21/2022

**Improved:**  
* Adjusted link colours for improved contrast

## [v1.0.7](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.7)
### 02/15/2022

**New:**  
* Added conditional display of page table of contents (`?toc=true`)

**Improved:**  
* Restored user zoom ability for improved accessibility
* Added titles on sub-topic sidebar links for improved accessibility
* Revised JS function `getURLParameterByName` to accept multiple terms (i.e. to support aliases) and also include functionality of previous returnByURLParameterByName function

## [v1.0.6](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.6)
### 11/15/2021

**Improved:**  
* Adjusted header line heights for improved readability
* Added initial support for responsive font sizing (480px only)
* Improved badge alignment
* Improved text label spacing for buttons
* Removed unneeded embedded check for Pagination Plugin
* Adjusted right margin of navbar to improve alignment
* Removed background colour from accordions to better support a dark theme

**Bugfix:**  
* Added an additional new line before Edit this Page on GitHub links to ensure proper formatting break

## [v1.0.5](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.5)
### 10/15/2021

**Improved:**  
* Relocated images to be within top-level docs folder

## [v1.0.4](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.4)
### 10/05/2021

**Improved:**
* Added 'Use this Template on GitHub' button on Sidebar
* Revised Sidebar project links
* Adjusted tall banner images for use in multi-course setups

## [v1.0.3](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.3)
### 08/03/2021

**Improved:**
* Added variable for text of Edit this Page on GitHub links to make modifications easier
* Changed JS function name from `getParameterByName` to `getURLParameterByName` for improved clarity
* Added the new JS function `returnByURLParameterByName` to return one of two values based on URL parameter (e.g. choose external link behaviour based on embedded status)

## [v1.0.2](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.2)
### 06/16/2021

**Improved:**
* Adjusted custom list bullet presentation

## [v1.0.1](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.1)
### 05/30/2021

**Improved:**
* Changed variable name `yourRepoURL` to `gitLinkRepoURL` for improved clarity

## [v1.0.0](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.0)
### 05/18/2021

**Improved:**  
* Increased default maximum width of Coverpage
* ReadMe and screenshot updates
* Changed conditional loading of Pagination script to asynchronous
* Adjusted breakpoint for two column display
* Decreased padding between items in navbar

**Bugfix:**  
* Fixed URL to project ReadMe file

## [v1.0.0-preview.2](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.0-preview.2)
### 05/10/2021

**Improved:**  
* Moved example Canvas LMS visual style adjustments from index.html to custom.css file
* Adjusted CSS of Headers for improved line wrapping
* Adjusted root base line height to increase lines in Sidebar
* Renamed 'responsive-wrap' class to 'responsive-container' for improved consistency
* Changed default external target link to '_top'
* Updated example styling for matching Docsify pages within Canvas LMS
* Increased padding below custom navbar to support more menu items
* Adjusted header sizes and margins
* List and button style updates
* Updated GitHub repo URL config and documentation
* Relocated embedly script to index.html file
* Changed Welcome page to a top-level item in Sidebar
* Updated example pages and removed home page from Sidebar
* Added example Coverpage (not enabled in index.html file)
**Bugfix:**  
* Fixed label colour for linked badges
* Consistent hover behaviour for linked badges and buttons

## [v1.0.0-preview.1](https://github.com/hibbitts-design/docsify-open-publishing-starter-kit/releases/tag/v1.0.0-preview.1)
### 05/04/2021

**New:**  
* Welcome to the preview release of Docsify Open Publishing Starter Kit!

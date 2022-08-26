# Nextjs Template

✨✨✨ A Next Template to easily build and develop product. ✨✨✨

## Requirements

| Packages | Versions                         |
| -------- | -------------------------------- |
| `node`   | ^12.22.0 or ^14.17.0 or >=16.0.0 |
| `yarn`   | v1 or v2                         |

## How to use

First clone this repository:

```shell
git clone https://github.com/DinhThienPhuc/nextjs-template.git
```

Replace git remote with your repo:

```shell
git remote set-url origin <link-to-your-repo>
```

Change `nextjs-template` folder name to your project name. Then feel free to develop your new world **_voila_**! ✨✨✨

## Structure

```shell
src
├── assets
│   ├── fonts
│   │   ├── ...
│   │   └── <first>.ttf
│   │
│   ├── icons
│   │   ├── <first>.svg
│   │   ├── ...
│   │   └── index.ts
│   │
│   ├── images
│   │   ├── <first>.png
│   │   ├── <second>.jpg
│   │   ├── ...
│   │   └── index.ts
│   │
│   └── styles
│       ├── global.css
│       └── reset.css
│
├── components
│   ├── <com>
│   │   ├── <com>.style.tsx
│   │   ├── <com>.tsx
│   │   └── <com>.utils.tsx
│   │
│   ├── ...
│   └── index.ts
│
├── gallery
│   ├── <com>
│   │   ├── <com>.style.tsx
│   │   ├── <com>.tsx
│   │   └── <com>.utils.tsx
│   │
│   ├── ...
│   └── index.ts
│
├── hooks
│   ├── <hook>.ts
│   ├── ...
│   └── index.ts
│
├── layouts
│   ├── <navbar>
│   │   ├── <navbar>.style.ts
│   │   ├── ...
│   │   └── <navbar>.tsx
│   │
│   ├── <default>.style.ts
│   ├── <default>.tsx
│   ├── ...
│   └── index.ts
│
├── modules
│   ├── <error-boundary>
│   │   ├── <error-boundary>.style.ts
│   │   └── <error-boundary>.tsx
│   │
│   ├── ...
│   └── index.ts
│
├── pages
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── 404.tsx│   │
│   ├── ...
│   └── index.tsx
│
├── services
│   ├── styled-themes
│   │   ├── index.tsx
│   │   └── schema.json
│   │
│   └── ...
│
├── utils
│   ├── constants.ts
│   ├── functions.ts
│   ├── interfaces.ts
│   └── ...
│
└── view
    ├── <homepage>
    │   ├── <homepage>.style.tsx
    │   ├── <homepage>.tsx
    │   └── <homepage>.utils.tsx
    └── ...
```

### Explaination elements inside `src`:

🔴 **Entry point**: _**the file contains all relative files. It is somehow a gate, an entrance for the whole folder. So that, when importing the element insided folder, we only need to import them all from one**_.

For example, with [`components`](src/components) folder:

[`index.ts`](src/components/index.ts)

```typescript
/* COMPONENTS ENTRY
   ========================================================================== */
import A from './A/A'
import B from './B/B'
import C from './C/C'
...

export { A, B, C }
```

When using a component, instead:

```typescript
import A from '/path/to/component/A/A'
import B from '/path/to/component/B/B'
import C from '/path/to/component/C/C'
...

// Using component A, B, C
```

We could use the shorter import below:

```typescript
import { A, B, C } from 'components'
...

// Using component A, B, C
```

### Folders explainations

#### [`assets`](src/assets) - icons, images, fonts, videos, ...

- [`icons`](src/assets/icons) - Contains all `svg` icons and a [`index.ts`](src/assets/icons/index.ts) file.

  - [`index.ts`](src/assets/icons/index.ts): the entry point for all `svg` icons.

- [`images`](src/assets/images) - Contains all type of image and a [`index.ts`](src/assets/images/index.ts) file.

  - [`index.ts`](src/assets/images/index.ts): the entry point for all image files.

- [`styles`](src/assets/styles) - Contains [`reset.css`](src/assets/styles/reset.css) and [`global.css`](src/assets/styles/global.css) file.

  - [`reset.css`](src/assets/styles/reset.css): reset the style of every browser to the same one, so that styles will be synced between browser crossing.
  - [`global.css`](src/assets/styles/global.css): contains all global styles of the project.

#### [`components`](src/components) - basic, pure components

- `<component>` - Contains all elements of a component

  - `<component>.tsx`: component main content
  - `<component>.style.tsx`: component styles
  - `<component>.utils.tsx`: component utils such as interfaces, constants, functions used for component only

#### [`gallery`](src/gallery) - series HOW-TO in [W3School](https://www.w3schools.com/howto/default.asp)

- `<component>` - Contains all elements of a component

  - `<component>.tsx`: component main content
  - `<component>.style.tsx`: component styles
  - `<component>.utils.tsx`: component utils such as interfaces, constants, functions used for component only

- [`index.ts`](src/components/index.ts): the entry point for all components

#### [`hooks`](src/hooks) - useful hooks

- `<useHook>` - A custom hook for specific usage, included with example.
- [`index.ts`](src/hooks/index.ts): the entry point for all hooks

#### [`layouts`](src/layouts) - layouts for specific cases

- `<component>` - Seperate component for each layout or each specific usage.
- [`default.tsx`](src/layouts/default.tsx) - Default layout.
- [`default.style.ts`](src/layouts/default.style.ts) - Styles for default layout.
- [`index.ts`](src/layouts/index.ts): the entry point for all layouts.

#### [`modules`](src/modules) - internal modules of the project, could have states itself

- `<module>` - Contains all elements of a module

  - `<module>.tsx`: module component main content
  - `<module>.style.tsx`: module component styles
  - `<module>.utils.tsx`: module utils such as interfaces, constants, functions used for module only

- [`index.ts`](src/modules/index.ts): the entry point for all modules

#### [`pages`](src/pages) - define page layout, head, which view it will render, ...

- [`_app.tsx`](src/pages/_app.tsx): root component.
- [`_document.tsx`](src/pages/_document.tsx): document component.
- [`404.tsx`](src/pages/404.tsx): not-found component.
- [`index.tsx`](src/pages/index.tsx): homepage

#### [`services`](src/services) - external services of the project, could be easily used by modifying some line of codes

- `<service>` - Contains all elements of a service. It is isolated and independent from the project. It could be plug in and out easily

#### [`utils`](src/utils) - can contains anythings with global scope

- [`constants.ts`](src/utils/constants.ts): global constants.
- [`functions.ts`](src/utils/functions.ts): global functions.
- [`interfaces.ts`](src/utils/interfaces.ts): global interfaces.

#### [`views`](src/views) - the main view of a page

- `<view>` - Contains all elements of a viewing of a page. It is isolated and independent from other views.

## API

Next.js has a lot of way to fetch data:

- SWR: https://swr.vercel.app/docs/with-nextjs
- API Routes: https://nextjs.org/docs/basic-features/data-fetching/overview
  ...

so feel free to pick up the best fetching stradegy for you project! ✨✨✨

## Gallery

✅

Source:

- ✅ Menu Icon: https://www.w3schools.com/howto/howto_css_menu_icon.asp
- ✅ Accordion: https://www.w3schools.com/howto/howto_js_accordion.asp
- ✅ Tabs: https://www.w3schools.com/howto/howto_js_tabs.asp
- ✅ Vertical Tabs: https://www.w3schools.com/howto/howto_js_vertical_tabs.asp
- Tab Headers: https://www.w3schools.com/howto/howto_js_tab_header.asp
- Full Page Tabs: https://www.w3schools.com/howto/howto_js_full_page_tabs.asp
- Hover Tabs: https://www.w3schools.com/howto/howto_js_hover_tabs.asp
- ✅ Top Navigation: https://www.w3schools.com/howto/howto_js_topnav.asp
- Responsive Topnav: https://www.w3schools.com/howto/howto_js_topnav_responsive.asp
- Split Navigation: https://www.w3schools.com/howto/howto_css_topnav_split.asp
- Navbar with Icons: https://www.w3schools.com/howto/howto_css_navbar_icon.asp
- Search Menu: https://www.w3schools.com/howto/howto_js_search_menu.asp
- Search Bar: https://www.w3schools.com/howto/howto_css_searchbar.asp
- Fixed Sidebar: https://www.w3schools.com/howto/howto_css_fixed_sidebar.asp
- Side Navigation: https://www.w3schools.com/howto/howto_js_sidenav.asp
- Responsive Sidebar: https://www.w3schools.com/howto/howto_css_sidebar_responsive.asp
- Fullscreen Navigation: https://www.w3schools.com/howto/howto_js_fullscreen_overlay.asp
- Off-Canvas Menu: https://www.w3schools.com/howto/howto_js_off-canvas.asp
- Hover Sidenav Buttons: https://www.w3schools.com/howto/howto_css_sidenav_buttons.asp
- Sidebar with Icons: https://www.w3schools.com/howto/howto_css_sidebar_icons.asp
- Horizontal Scroll Menu: https://www.w3schools.com/howto/howto_css_menu_horizontal_scroll.asp
- Vertical Menu: https://www.w3schools.com/howto/howto_css_vertical_menu.asp
- Bottom Navigation: https://www.w3schools.com/howto/howto_css_bottom_nav.asp
- Responsive Bottom Nav: https://www.w3schools.com/howto/howto_js_bottom_nav_responsive.asp
- Bottom Border Nav Links: https://www.w3schools.com/howto/howto_css_navbar_border.asp
- Right Aligned Menu Links: https://www.w3schools.com/howto/howto_css_topnav_right.asp
- Centered Menu Link: https://www.w3schools.com/howto/howto_css_topnav_centered.asp
- Equal Width Menu Links: https://www.w3schools.com/howto/howto_css_topnav_equal_width.asp
- Fixed Menu: https://www.w3schools.com/howto/howto_css_fixed_menu.asp
- Slide Down Bar on Scroll: https://www.w3schools.com/howto/howto_js_navbar_slide.asp
- Hide Navbar on Scroll: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp
- Shrink Navbar on Scroll: https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
- Sticky Navbar: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
- Navbar on Image: https://www.w3schools.com/howto/howto_css_navbar_image.asp
- Hover Dropdowns: https://www.w3schools.com/howto/howto_css_dropdown.asp
- Click Dropdowns: https://www.w3schools.com/howto/howto_js_dropdown.asp
- Cascading Dropdown: https://www.w3schools.com/howto/howto_js_cascading_dropdown.asp
- Dropdown in Topnav: https://www.w3schools.com/howto/howto_css_dropdown_navbar.asp
- Dropdown in Sidenav: https://www.w3schools.com/howto/howto_js_dropdown_sidenav.asp
- Resp Navbar Dropdown: https://www.w3schools.com/howto/howto_js_responsive_navbar_dropdown.asp
- Subnavigation Menu: https://www.w3schools.com/howto/howto_css_subnav.asp
- Dropup: https://www.w3schools.com/howto/howto_css_dropup.asp
- Mega Menu: https://www.w3schools.com/howto/howto_css_mega_menu.asp
- Mobile Menu: https://www.w3schools.com/howto/howto_js_mobile_navbar.asp
- Curtain Menu: https://www.w3schools.com/howto/howto_js_curtain_menu.asp
- Collapsed Sidebar: https://www.w3schools.com/howto/howto_js_collapse_sidebar.asp
- Collapsed Sidepanel: https://www.w3schools.com/howto/howto_js_collapse_sidepanel.asp
- ✅ Pagination: https://www.w3schools.com/howto/howto_css_pagination.asp
- ✅ Breadcrumbs: https://www.w3schools.com/howto/howto_css_breadcrumbs.asp
- Button Group: https://www.w3schools.com/howto/howto_css_button_group.asp
- Vertical Button Group: https://www.w3schools.com/howto/howto_css_button_group_vertical.asp
- Sticky Social Bar: https://www.w3schools.com/howto/howto_css_sticky_social_bar.asp
- Pill Navigation: https://www.w3schools.com/howto/howto_css_pill_nav.asp
- Responsive Header: https://www.w3schools.com/howto/howto_css_responsive_header.asp
- Slideshow: https://www.w3schools.com/howto/howto_js_slideshow.asp
- Slideshow Gallery: https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
- Modal Images: https://www.w3schools.com/howto/howto_css_modal_images.asp
- Lightbox: https://www.w3schools.com/howto/howto_js_lightbox.asp
- Responsive Image Grid: https://www.w3schools.com/howto/howto_css_image_grid_responsive.asp
- Image Grid: https://www.w3schools.com/howto/howto_js_image_grid.asp
- Tab Gallery: https://www.w3schools.com/howto/howto_js_tab_img_gallery.asp
- Image Overlay Fade: https://www.w3schools.com/howto/howto_css_image_overlay.asp
- Image Overlay Slide: https://www.w3schools.com/howto/howto_css_image_overlay_slide.asp
- Image Overlay Zoom: https://www.w3schools.com/howto/howto_css_image_overlay_zoom.asp
- Image Overlay Title: https://www.w3schools.com/howto/howto_css_image_overlay_title.asp
- Image Overlay Icon: https://www.w3schools.com/howto/howto_css_image_overlay_icon.asp
- Image Effects: https://www.w3schools.com/howto/howto_css_image_effects.asp
- Black and White Image: https://www.w3schools.com/howto/howto_css_image_bw.asp
- Image Text: https://www.w3schools.com/howto/howto_css_image_text.asp
- Image Text Blocks: https://www.w3schools.com/howto/howto_css_image_text_blocks.asp
- Transparent Image Text: https://www.w3schools.com/howto/howto_css_image_transparent.asp
- Full Page Image: https://www.w3schools.com/howto/howto_css_full_page.asp
- Form on Image: https://www.w3schools.com/howto/howto_css_form_on_image.asp
- Hero Image: https://www.w3schools.com/howto/howto_css_hero_image.asp
- Blur Background Image: https://www.w3schools.com/howto/howto_css_blurred_background.asp
- Change Bg on Scroll: https://www.w3schools.com/howto/howto_css_bg_change_scroll.asp
- Side-by-Side Images: https://www.w3schools.com/howto/howto_css_images_side_by_side.asp
- Rounded Images: https://www.w3schools.com/howto/howto_css_rounded_images.asp
- Avatar Images: https://www.w3schools.com/howto/howto_css_image_avatar.asp
- Responsive Images: https://www.w3schools.com/howto/howto_css_image_responsive.asp
- Center Images: https://www.w3schools.com/howto/howto_css_image_center.asp
- Thumbnails: https://www.w3schools.com/howto/howto_css_thumbnail.asp
- Border Around Image: https://www.w3schools.com/howto/howto_css_border_image.asp
- Meet the Team: https://www.w3schools.com/howto/howto_css_team.asp
- Sticky Image: https://www.w3schools.com/howto/howto_css_image_sticky.asp
- Flip an Image: https://www.w3schools.com/howto/howto_css_flip_image.asp
- Shake an Image: https://www.w3schools.com/howto/howto_css_shake_image.asp
- Portfolio Gallery: https://www.w3schools.com/howto/howto_css_portfolio_gallery.asp
- Portfolio with Filtering: https://www.w3schools.com/howto/howto_js_portfolio_filter.asp
- Image Zoom: https://www.w3schools.com/howto/howto_js_image_zoom.asp
- Image Magnifier Glass: https://www.w3schools.com/howto/howto_js_image_magnifier_glass.asp
- Image Comparison Slider: https://www.w3schools.com/howto/howto_js_image_comparison.asp
- Favicon: https://www.w3schools.com/howto/howto_html_favicon.asp
- Alert Buttons: https://www.w3schools.com/howto/howto_css_alert_buttons.asp
- Outline Buttons: https://www.w3schools.com/howto/howto_css_outline_buttons.asp
- Split Buttons: https://www.w3schools.com/howto/howto_css_button_split.asp
- Animated Buttons: https://www.w3schools.com/howto/howto_css_animate_buttons.asp
- Fading Buttons: https://www.w3schools.com/howto/howto_css_fading_buttons.asp
- Button on Image: https://www.w3schools.com/howto/howto_css_button_on_image.asp
- Social Media Buttons: https://www.w3schools.com/howto/howto_css_social_media_buttons.asp
- Read More Read Less: https://www.w3schools.com/howto/howto_js_read_more.asp
- Loading Buttons: https://www.w3schools.com/howto/howto_css_loading_buttons.asp
- Download Buttons: https://www.w3schools.com/howto/howto_css_download_button.asp
- Pill Buttons: https://www.w3schools.com/howto/howto_css_pill_button.asp
- Notification Button: https://www.w3schools.com/howto/howto_css_notification_button.asp
- Icon Buttons: https://www.w3schools.com/howto/howto_css_icon_buttons.asp
- Next/prev Buttons: https://www.w3schools.com/howto/howto_css_next_prev.asp
- More Button in Nav: https://www.w3schools.com/howto/howto_css_more_button.asp
- Block Buttons: https://www.w3schools.com/howto/howto_css_block_buttons.asp
- Text Buttons: https://www.w3schools.com/howto/howto_css_text_buttons.asp
- Round Buttons: https://www.w3schools.com/howto/howto_css_round_buttons.asp
- Scroll To Top Button: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp
- Login Form: https://www.w3schools.com/howto/howto_css_login_form.asp
- Signup Form: https://www.w3schools.com/howto/howto_css_signup_form.asp
- Checkout Form: https://www.w3schools.com/howto/howto_css_checkout_form.asp
- Contact Form: https://www.w3schools.com/howto/howto_css_contact_form.asp
- Social Login Form: https://www.w3schools.com/howto/howto_css_social_login.asp
- Register Form: https://www.w3schools.com/howto/howto_css_register_form.asp
- Form with Icons: https://www.w3schools.com/howto/howto_css_form_icon.asp
- Newsletter: https://www.w3schools.com/howto/howto_css_newsletter.asp
- Stacked Form: https://www.w3schools.com/howto/howto_css_stacked_form.asp
- Responsive Form: https://www.w3schools.com/howto/howto_css_responsive_form.asp
- Popup Form: https://www.w3schools.com/howto/howto_js_popup_form.asp
- Inline Form: https://www.w3schools.com/howto/howto_css_inline_form.asp
- Clear Input Field: https://www.w3schools.com/howto/howto_html_clear_input.asp
- Hide Number Arrows: https://www.w3schools.com/howto/howto_css_hide_arrow_number.asp
- Copy Text to Clipboard: https://www.w3schools.com/howto/howto_js_copy_clipboard.asp
- Animated Search: https://www.w3schools.com/howto/howto_css_animated_search.asp
- Search Button: https://www.w3schools.com/howto/howto_css_search_button.asp
- Fullscreen Search: https://www.w3schools.com/howto/howto_css_fullscreen_search.asp
- Input Field in Navbar: https://www.w3schools.com/howto/howto_css_input_navbar.asp
- Login Form in Navbar: https://www.w3schools.com/howto/howto_css_login_form_navbar.asp
- Custom Checkbox/Radio: https://www.w3schools.com/howto/howto_css_custom_checkbox.asp
- Custom Select: https://www.w3schools.com/howto/howto_custom_select.asp
- ✅ Toggle Switch: https://www.w3schools.com/howto/howto_css_switch.asp
- Check Checkbox: https://www.w3schools.com/howto/howto_js_display_checkbox_text.asp
- Detect Caps Lock: https://www.w3schools.com/howto/howto_js_detect_capslock.asp
- Trigger Button on Enter: https://www.w3schools.com/howto/howto_js_trigger_button_enter.asp
- Password Validation: https://www.w3schools.com/howto/howto_js_password_validation.asp
- Toggle Password Visibility: https://www.w3schools.com/howto/howto_js_toggle_password.asp
- Multiple Step Form: https://www.w3schools.com/howto/howto_js_form_steps.asp
- Autocomplete: https://www.w3schools.com/howto/howto_js_autocomplete.asp
- Turn off autocomplete: https://www.w3schools.com/howto/howto_html_autocomplete_off.asp
- Turn off spellcheck: https://www.w3schools.com/howto/howto_html_spellcheck_disable.asp
- File Upload Button: https://www.w3schools.com/howto/howto_html_file_upload_button.asp
- Empty Input Validation: https://www.w3schools.com/howto/howto_js_validation_empty_input.asp
- Filter List: https://www.w3schools.com/howto/howto_js_filter_lists.asp
- Filter Table: https://www.w3schools.com/howto/howto_js_filter_table.asp
- Filter Elements: https://www.w3schools.com/howto/howto_js_filter_elements.asp
- Filter Dropdown: https://www.w3schools.com/howto/howto_js_filter_dropdown.asp
- Sort List: https://www.w3schools.com/howto/howto_js_sort_list.asp
- Sort Table: https://www.w3schools.com/howto/howto_js_sort_table.asp
- Zebra Striped Table: https://www.w3schools.com/howto/howto_css_table_zebra.asp
- Center Tables: https://www.w3schools.com/howto/howto_css_table_center.asp
- Full-width Table: https://www.w3schools.com/howto/howto_css_table_full_width.asp
- Side-by-side Tables: https://www.w3schools.com/howto/howto_css_table_side_by_side.asp
- Responsive Tables: https://www.w3schools.com/howto/howto_css_table_responsive.asp
- Comparison Table: https://www.w3schools.com/howto/howto_css_comparison_table.asp
- Fullscreen Video: https://www.w3schools.com/howto/howto_css_fullscreen_video.asp
- Modal Boxes: https://www.w3schools.com/howto/howto_css_modals.asp
- Delete Modal: https://www.w3schools.com/howto/howto_css_delete_modal.asp
- Timeline: https://www.w3schools.com/howto/howto_css_timeline.asp
- Scroll Indicator: https://www.w3schools.com/howto/howto_js_scroll_indicator.asp
- Progress Bars: https://www.w3schools.com/howto/howto_js_progressbar.asp
- Skill Bar: https://www.w3schools.com/howto/howto_css_skill_bar.asp
- Range Sliders: https://www.w3schools.com/howto/howto_js_rangeslider.asp
- Tooltips: https://www.w3schools.com/howto/howto_css_tooltip.asp
- Display Element Hover: https://www.w3schools.com/howto/howto_css_display_element_hover.asp
- Popups: https://www.w3schools.com/howto/howto_js_popup.asp
- Collapsible: https://www.w3schools.com/howto/howto_js_collapsible.asp
- Calendar: https://www.w3schools.com/howto/howto_css_calendar.asp
- HTML Includes: https://www.w3schools.com/howto/howto_html_include.asp
- To Do List: https://www.w3schools.com/howto/howto_js_todolist.asp
- Loaders: https://www.w3schools.com/howto/howto_css_loader.asp
- Badges: https://www.w3schools.com/howto/howto_css_badge.asp
- Star Rating: https://www.w3schools.com/howto/howto_css_star_rating.asp
- User Rating: https://www.w3schools.com/howto/howto_css_user_rating.asp
- Overlay Effect: https://www.w3schools.com/howto/howto_css_overlay.asp
- Contact Chips: https://www.w3schools.com/howto/howto_css_contact_chips.asp
- Cards: https://www.w3schools.com/howto/howto_css_cards.asp
- Flip Card: https://www.w3schools.com/howto/howto_css_flip_card.asp
- Profile Card: https://www.w3schools.com/howto/howto_css_profile_card.asp
- Product Card: https://www.w3schools.com/howto/howto_css_product_card.asp
- Alerts: https://www.w3schools.com/howto/howto_js_alert.asp
- Callout: https://www.w3schools.com/howto/howto_js_callout.asp
- Notes: https://www.w3schools.com/howto/howto_css_notes.asp
- Labels: https://www.w3schools.com/howto/howto_css_labels.asp
- Circles: https://www.w3schools.com/howto/howto_css_circles.asp
- Style HR: https://www.w3schools.com/howto/howto_css_style_hr.asp
- Coupon: https://www.w3schools.com/howto/howto_css_coupon.asp
- List Group: https://www.w3schools.com/howto/howto_css_list_group.asp
- List Group with Badges: https://www.w3schools.com/howto/howto_css_list_group_badges.asp
- List Without Bullets: https://www.w3schools.com/howto/howto_css_list_without_bullets.asp
- Responsive Text: https://www.w3schools.com/howto/howto_css_responsive_text.asp
- Cutout Text: https://www.w3schools.com/howto/howto_css_cutout_text.asp
- Glowing Text: https://www.w3schools.com/howto/howto_css_glowing_text.asp
- Fixed Footer: https://www.w3schools.com/howto/howto_css_fixed_footer.asp
- Sticky Element: https://www.w3schools.com/howto/howto_css_sticky_element.asp
- Equal Height: https://www.w3schools.com/howto/howto_css_equal_height.asp
- Clearfix: https://www.w3schools.com/howto/howto_css_clearfix.asp
- Responsive Floats: https://www.w3schools.com/howto/howto_css_responsive_floats.asp
- Snackbar: https://www.w3schools.com/howto/howto_js_snackbar.asp
- Fullscreen Window: https://www.w3schools.com/howto/howto_js_fullscreen.asp
- Scroll Drawing: https://www.w3schools.com/howto/howto_js_scrolldrawing.asp
- Smooth Scroll: https://www.w3schools.com/howto/howto_css_smooth_scroll.asp
- Gradient Bg Scroll: https://www.w3schools.com/howto/howto_css_bg_gradient_scroll.asp
- Sticky Header: https://www.w3schools.com/howto/howto_js_sticky_header.asp
- Shrink Header on Scroll: https://www.w3schools.com/howto/howto_js_shrink_header_scroll.asp
- Pricing Table: https://www.w3schools.com/howto/howto_css_pricing_table.asp
- Parallax: https://www.w3schools.com/howto/howto_css_parallax.asp
- Aspect Ratio: https://www.w3schools.com/howto/howto_css_aspect_ratio.asp
- Responsive Iframes: https://www.w3schools.com/howto/howto_css_responsive_iframes.asp
- Toggle Like/Dislike: https://www.w3schools.com/howto/howto_js_toggle_like.asp
- Toggle Hide/Show: https://www.w3schools.com/howto/howto_js_toggle_hide_show.asp
- Toggle Dark Mode: https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp
- Toggle Text: https://www.w3schools.com/howto/howto_js_toggle_text.asp
- Toggle Class: https://www.w3schools.com/howto/howto_js_toggle_class.asp
- Add Class: https://www.w3schools.com/howto/howto_js_add_class.asp
- Remove Class: https://www.w3schools.com/howto/howto_js_remove_class.asp
- Active Class: https://www.w3schools.com/howto/howto_js_active_element.asp
- Tree View: https://www.w3schools.com/howto/howto_js_treeview.asp
- Remove Property: https://www.w3schools.com/howto/howto_js_remove_property_object.asp
- Offline Detection: https://www.w3schools.com/howto/howto_js_offline_detection.asp
- Find Hidden Element: https://www.w3schools.com/howto/howto_js_check_hidden.asp
- Redirect Webpage: https://www.w3schools.com/howto/howto_js_redirect_webpage.asp
- Zoom Hover: https://www.w3schools.com/howto/howto_css_zoom_hover.asp
- Flip Box: https://www.w3schools.com/howto/howto_css_flip_box.asp
- Center Vertically: https://www.w3schools.com/howto/howto_css_center-vertical.asp
- Center Button in DIV: https://www.w3schools.com/howto/howto_css_center_button.asp
- Center a List: https://www.w3schools.com/howto/howto_css_center-list.asp
- Transition on Hover: https://www.w3schools.com/howto/howto_css_transition_hover.asp
- Arrows: https://www.w3schools.com/howto/howto_css_arrows.asp
- Shapes: https://www.w3schools.com/howto/howto_css_shapes.asp
- Download Link: https://www.w3schools.com/howto/howto_html_download_link.asp
- Full Height Element: https://www.w3schools.com/howto/howto_css_div_full_height.asp
- Browser Window: https://www.w3schools.com/howto/howto_css_browser_window.asp
- Custom Scrollbar: https://www.w3schools.com/howto/howto_css_custom_scrollbar.asp
- Hide Scrollbar: https://www.w3schools.com/howto/howto_css_hide_scrollbars.asp
- Show/Force Scrollbar: https://www.w3schools.com/howto/howto_css_force_scrollbars.asp
- Device Look: https://www.w3schools.com/howto/howto_css_devices.asp
- Contenteditable Border: https://www.w3schools.com/howto/howto_css_contenteditable_border.asp
- Placeholder Color: https://www.w3schools.com/howto/howto_css_placeholder.asp
- Disable Resizing of Textarea: https://www.w3schools.com/howto/howto_css_disable_resize_textarea.asp
- Disable Text Selection: https://www.w3schools.com/howto/howto_css_disable_text_selection.asp
- Text Selection Color: https://www.w3schools.com/howto/howto_css_text_selection.asp
- Bullet Color: https://www.w3schools.com/howto/howto_css_bullet_color.asp
- Vertical Line: https://www.w3schools.com/howto/howto_css_vertical_line.asp
- Dividers: https://www.w3schools.com/howto/howto_css_dividers.asp
- Animate Icons: https://www.w3schools.com/howto/howto_js_animate_icons.asp
- Countdown Timer: https://www.w3schools.com/howto/howto_js_countdown.asp
- Typewriter: https://www.w3schools.com/howto/howto_js_typewriter.asp
- Coming Soon Page: https://www.w3schools.com/howto/howto_css_coming_soon.asp
- Chat Messages: https://www.w3schools.com/howto/howto_css_chat.asp
- Popup Chat Window: https://www.w3schools.com/howto/howto_js_popup_chat.asp
- Split Screen: https://www.w3schools.com/howto/howto_css_split_screen.asp
- Testimonials: https://www.w3schools.com/howto/howto_css_testimonials.asp
- Section Counter: https://www.w3schools.com/howto/howto_css_section_counter.asp
- Quotes Slideshow: https://www.w3schools.com/howto/howto_js_quotes_slideshow.asp
- Closable List Items: https://www.w3schools.com/howto/howto_js_close_list_items.asp
- Typical Device Breakpoints: https://www.w3schools.com/howto/howto_css_media_query_breakpoints.asp
- Draggable HTML Element: https://www.w3schools.com/howto/howto_js_draggable.asp
- JS Media Queries: https://www.w3schools.com/howto/howto_js_media_queries.asp
- Syntax Highlighter: https://www.w3schools.com/howto/howto_syntax_highlight.asp
- JS Animations: https://www.w3schools.com/howto/howto_js_animate.asp
- JS String Length: https://www.w3schools.com/howto/howto_js_string_length.asp
- JS Exponentiation: https://www.w3schools.com/howto/howto_js_exponentiation.asp
- JS Default Parameters: https://www.w3schools.com/howto/howto_js_default_parameters.asp
- Get Current URL: https://www.w3schools.com/howto/howto_js_get_url.asp
- Get Current Screen Size: https://www.w3schools.com/howto/howto_js_get_current_window.asp
- Get Iframe Elements: https://www.w3schools.com/howto/howto_js_element_iframe.asp
- Create a Free Website: https://www.w3schools.com/howto/howto_website_create_free.asp
- Make a Website: https://www.w3schools.com/howto/howto_make_a_website.asp
- Make a Static Website: https://www.w3schools.com/howto/howto_website_static.asp
- Host a Static Website: https://www.w3schools.com/howto/howto_website_host_staticwebsite.asp
- Make a Website (W3.CSS): https://www.w3schools.com/howto/howto_website.asp
- Make a Website (BS3): https://www.w3schools.com/howto/howto_website_bootstrap.asp
- Make a Website (BS4): https://www.w3schools.com/howto/howto_website_bootstrap4.asp
- Make a Website (BS5): https://www.w3schools.com/howto/howto_website_bootstrap5.asp
- Create and View a Website: https://www.w3schools.com/howto/howto_create_and_view.asp
- Create a Link Tree Website: https://www.w3schools.com/howto/howto_website_create_linktree.asp
- Create a Portfolio: https://www.w3schools.com/howto/howto_website_create_portfolio.asp
- Create a Resume: https://www.w3schools.com/howto/howto_website_create_resume.asp
- Make a Restaurant Website: https://www.w3schools.com/howto/howto_website_restaurant.asp
- Make a Business Website: https://www.w3schools.com/howto/howto_website_business.asp
- Make a WebBook: https://www.w3schools.com/howto/howto_make_a_webbook.asp
- Center Website: https://www.w3schools.com/howto/howto_css_center_website.asp
- Contact Section: https://www.w3schools.com/howto/howto_css_contact_section.asp
- About Page: https://www.w3schools.com/howto/howto_css_about_page.asp
- Big Header: https://www.w3schools.com/howto/howto_css_style_header.asp
- Example Website: https://www.w3schools.com/howto/howto_css_example_website.asp
- 2 Column Layout: https://www.w3schools.com/howto/howto_css_two_columns.asp
- 3 Column Layout: https://www.w3schools.com/howto/howto_css_three_columns.asp
- 4 Column Layout: https://www.w3schools.com/howto/howto_css_four_columns.asp
- Expanding Grid: https://www.w3schools.com/howto/howto_js_expanding_grid.asp
- List Grid View: https://www.w3schools.com/howto/howto_js_list_grid_view.asp
- Mixed Column Layout: https://www.w3schools.com/howto/howto_css_mixed_columns.asp
- Column Cards: https://www.w3schools.com/howto/howto_css_column_cards.asp
- Zig Zag Layout: https://www.w3schools.com/howto/howto_css_zig_zag_layout.asp
- Blog Layout: https://www.w3schools.com/howto/howto_css_blog_layout.asp
- Google Charts: https://www.w3schools.com/howto/howto_google_charts.asp
- Google Fonts: https://www.w3schools.com/howto/howto_google_fonts.asp
- Google Font Pairings: https://www.w3schools.com/howto/howto_google_fonts_pairings.asp
- Google Set up Analytics: https://www.w3schools.com/howto/howto_google_analytics.asp
- Convert Weight: https://www.w3schools.com/howto/howto_js_weight_converter.asp
- Convert Temperature: https://www.w3schools.com/howto/howto_js_temperature_converter.asp
- Convert Length: https://www.w3schools.com/howto/howto_js_length_converter.asp
- Convert Speed: https://www.w3schools.com/howto/howto_js_speed_converter.asp
- Get a Developer Job: https://www.w3schools.com/howto/howto_blog_developer_job.asp
- Become a Front-End Dev.: https://www.w3schools.com/howto/howto_blog_become_frontenddev.asp

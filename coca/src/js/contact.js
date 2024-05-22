import '/scss/contact.scss';

// components

import { useTheme } from './components/theme.js';
import { useBurger } from './components/burger.js';
import { usePhone } from './components/contact/phone.js';
import { usePartnersSlider } from './components/home/slider.js';

useTheme();
useBurger();
usePhone();
usePartnersSlider();
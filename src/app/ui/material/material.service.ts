import { Injectable } from '@angular/core';

const svgIcons = [
  { name: 'arrow_top', path: 'svg/icons/arrow-up.svg' },
  { name: 'arrow_down', path: 'svg/icons/arrow-down.svg' },
  { name: 'arrow_left', path: 'svg/icons/arrow-left.svg' },
  { name: 'arrow_right', path: 'svg/icons/arrow-right.svg' },
  { name: 'cash_fill', path: 'svg/icons/cash-fill.svg' },
  { name: 'credit_card_fill', path: 'svg/icons/credit-card-fill.svg' },
  { name: 'trash_outline', path: 'svg/icons/trash-outline.svg' },
  { name: 'unlock_outline', path: 'svg/icons/unlock-outline.svg' },
  { name: 'play_arrow_outline', path: 'svg/icons/play-arrow-outline.svg' },
  { name: 'list', path: 'svg/icons/list.svg' },
  { name: 'check_circle', path: 'svg/icons/check-circle.svg' },
  { name: 'star', path: 'svg/icons/star.svg' },
  { name: 'help_circle', path: 'svg/icons/help-circle.svg' },
  { name: 'shopping_cart', path: 'svg/icons/shopping-cart.svg' },
  { name: 'settings', path: 'svg/icons/settings.svg' },

  { name: 'category_b', path: 'images/driving-licence/categories/category_b.svg' },
  { name: 'category_boats', path: 'images/driving-licence/categories/category_boats.svg' },
  { name: 'category_d', path: 'images/driving-licence/categories/category_d.svg' },
  { name: 'category_fly', path: 'images/driving-licence/categories/category_fly.svg' },
  { name: 'category_m', path: 'images/driving-licence/categories/category_m.svg' },

  { name: 'usa_logo_eagle', path: 'svg/usa_logo_eagle.svg' },
  { name: 'fake-lines', path: 'svg/fake-lines.svg' },

  { name: 'close', path: 'svg/icons/close.svg' },
  { name: 'government', path: 'svg/icons/government.svg' },
  { name: 'question', path: 'svg/icons/question.svg' },
];

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  get localSvgIcons(): { name: string; path: string }[] {
    return svgIcons;
  }
}

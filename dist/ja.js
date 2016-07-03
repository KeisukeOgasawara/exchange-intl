/* eslint-disable quote-props */
/* eslint comma-dangle: ["error", "always"] */
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = {
  'test': {
    'basic': 'japanese',
    'interpolation': 'quoine-{{name}}'
  },
  'trade-overview': {
    'baseOpenPrice': '平均約定レート',
    'pnl': '損益',
    'position': '建玉数'
  },
  'history': {
    'all-orders': '注文履歴',
    'executions': '約定履歴',
    'live-orders': '注文照会',
    'positions': 'ポジション照会'
  },
  'book': {
    'group': 'グループ'
  },
  'order': {
    'avg-price': '平均約定レート',
    'buy': '買',
    'buys': '買',
    'cancel': 'キャンセル',
    'created-at': '注文日時',
    'disclose-quantity': '開示注文数量',
    'edit-price': 'レート変更',
    'edit-quantity': '数量変更',
    'est-price': '概算',
    'fee': '取引手数料',
    'id': '注文番号',
    'interest': 'レバレッジ手数料',
    'leverage': '倍率',
    'limit': '指値注文',
    'margin': '信用倍率',
    'market': '成行注文',
    'market_with_range': '範囲注文',
    'mode': '両建',
    'net-out': 'Net-Out',
    'one-direction': '一方向',
    'price': '注文レート',
    'quantity': '注文数量',
    'sell': '売',
    'sells': '売',
    'slippage': 'スリッページ',
    'stop': '逆指値注文',
    'two-direction': '双方向の'
  },
  'position': {
    'all': '一括決済',
    'close': '決済',
    'close-pnl': '決済損益',
    'close-qty': '決済数量.',
    'created-at': '約定日時',
    'edit-stopLoss': 'SL変更',
    'edit-takeProfit': 'TP変更',
    'id': '番号',
    'long': '買建',
    'longs': '買建',
    'margin': '必要証拠金',
    'short': '売建',
    'shorts': '売建',
    'total-interest': 'レバ手数料'
  },
  'execution': {
    'created-at': '約定日時',
    'id': '約定番号'
  },
  'menu': {
    'dashboard': 'ビットコイン売買',
    'accounts': 'マイページ',
    'setting': '信用設定'
  },
  'product': {
    'low': '安値',
    'high': '高値',
    'volume': '24時間取扱高'
  },
  'account': {
    'pnl': '損益',
    'balance': '現金残高',
    'balance-total': '総資産',
    'balance-quote': '資産',
    'balance-base': '仮想通貨資産',
    'equity': '評価残高',
    'margin-used': '使用中証拠金額',
    'margin-available': '信用取引余力',
    'margin-coverage': '証拠金維持率'
  },
  'common': {
    'cancel': 'キャンセル',
    'load-more': 'もっと見る',
    'margin': '信用取引',
    'spot': '現物取引',
    'submit': '実行'
  },
  'sign-in': {
    'action': 'サインイン',
    'email': 'Eメール',
    'password': 'パスワード',
    'title': 'サインイン',
    'use-all-features': 'Sign in to use all features of QUOINE Exchange'
  },
  'error': {
    'order-direction-long-need-empty': '両建の設定がOFFになっています',
    'order-direction-short-need-empty': '両建の設定がOFFになっています',
    'order-price-bigger-than-min': '1以上のレートを入力してください',
    'order-price-limit-bigger-than-market-bid': '指値の売り注文の場合、現在のレートより高いレートを入力してください',
    'order-price-limit-smaller-than-market-ask': '指値の買い注文の場合、現在のレートより低いレートを入力してください',
    'order-price-stop-bigger-than-market-ask': '逆指値の買い注文の場合、現在のレートより高いレートを入力してください',
    'order-price-stop-smaller-than-market-bid': '逆指値の売り注文の場合、現在のレートより低いレートを入力してください',
    'order-quantity-bigger-than-min': '0.01以上の数量を入力してください',
    'order-quantity-smaller-than-max': '最大発注量は100BTCです'
  }
};
module.exports = exports['default'];
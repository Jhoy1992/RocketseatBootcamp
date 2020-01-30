import { Platform } from 'react-native';

if (Platform.OS === 'android') {
  require('intl');
  require('intl/locale-data/jsonp/pt-BR');
}

export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

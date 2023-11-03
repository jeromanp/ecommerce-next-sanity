export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nombre',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Imagen',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 90,
      },
    },
    {
      name: 'buttonText',
      title: 'ButtonTexto',
      type: 'string',
    },
    {
      name: 'product',
      title: 'Product',
      type: 'string',
    },
    {
      name: 'desc',
      title: 'Desc',
      type: 'string',
    },
    {
      name: 'smallText',
      title: 'SmallText',
      type: 'string',
    },
    {
      name: 'midText',
      title: 'MidText',
      type: 'string',
    },
    {
      name: 'largeText1',
      title: 'LargeText1',
      type: 'string',
    },
    {
      name: 'largeText2',
      title: 'LargeText2',
      type: 'string',
    },
    {
      name: 'discount',
      title: 'Discount',
      type: 'string',
    },
    {
      name: 'saleTime',
      title: 'SaleTime',
      type: 'string',
    },
  ],
}

// Regular Expressions or Regex

const str = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe unde, ab molestias dolor tempore quae ipsa autem exercitationem quidem obcaecati provident aliquam qui quod dolores.`;

// regex format: /pattern/modifier(s)

const regex = /dolores\.$/i;

console.log(regex.test(str));

import cn from 'classnames';

function toVariant(variantString: string): string {
  return `--${variantString}`;
}

function toModifier(modifierString: string): string {
  return `-${modifierString}`;
}

export { toVariant, toModifier, cn };

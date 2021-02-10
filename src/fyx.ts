import features from './features';
import './features/notices';
import './features/quick-send';
import './features/markdown';
import hashtags from './features/hashtags';
import './features/context-menu.scss';
import './features/code-highlight.scss';
import './features/history';

window.onload = () => features.features.forEach((feature: Function) => feature());
document.addEventListener("DOMContentLoaded", () => hashtags());

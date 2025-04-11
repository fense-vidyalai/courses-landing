const GA_TRACKING_ID = "G-GQYXWZ76XS";

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
const pageview = ({ path, userId }: { path: string; userId: string }) => {
  // console.log({ url, userId });
  window.gtag("config", GA_TRACKING_ID, {
    page_path: path,
    link_attribution: {
      cookie_expires: 60,
      levels: 7,
    },
    user_id: userId,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string;
  category: string;
  label: string;
  value: number;
}) => {
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value,
  });
};

export { pageview, event, GA_TRACKING_ID };

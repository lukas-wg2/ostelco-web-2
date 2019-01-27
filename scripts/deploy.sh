set -x
ionic build --prod --release
firebase deploy --project ostelco-web

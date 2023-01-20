import './StatusBar.css';

const StatusBar = (props) => {
    return (
        <div>
            <h4>Your Application status:</h4>
            <div class="order-status">
            <div class="order-status-timeline">
                <div class="order-status-timeline-completion line"></div>
            </div>

            <div class="image-order-status image-order-status-new active img-circle">
                <span class="status">Application</span>
                <div class="icon"></div>
            </div>
            <div class="image-order-status image-order-status-active active img-circle">
                <span class="status">Social Interview</span>
                <div class="icon"></div>
            </div>
            <div class="image-order-status image-order-status-intransit active img-circle">
                <span class="status">Professional Interview</span>
                <div class="icon"></div>
            </div>
            <div class="image-order-status image-order-status-completed active img-circle">
                <span class="status">Decision</span>
                <div class="icon"></div>
            </div>

            </div>
        </div>
    );
  };
  
  export default StatusBar;
  
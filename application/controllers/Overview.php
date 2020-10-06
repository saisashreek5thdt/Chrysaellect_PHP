<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Overview extends CI_Controller {

	public function index() {
		$data['main'] = 'overview_view';
		$this->load->view('layouts/main_view', $data);
	}

}

?>
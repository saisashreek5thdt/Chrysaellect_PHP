<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class FAQ extends CI_Controller {

	public function index() {
		$data['main'] = 'faq_view';
		$this->load->view('layouts/main_view', $data);
	}

}

?>
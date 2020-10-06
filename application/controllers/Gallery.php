<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Gallery extends CI_Controller {

	public function index() {
		$data['main'] = 'gallery_view';
		$this->load->view('layouts/main_view', $data);
	}

}

?>